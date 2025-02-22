'use client';
import { cn } from '@/lib/utils';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn('h-full relative bg-white w-full', containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize ?? 3}
          opacities={opacities}
          shader={`float animation_speed_factor = ${animationSpeed.toFixed(
            1
          )};`}
          center={['x', 'y']}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ('x' | 'y')[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = '',
  center = ['x', 'y'],
}) => {
  const uniforms = useMemo(() => {
    return {
      u_colors: {
        value: colors.map((color) => color.map((c) => c / 255)),
        type: 'uniform3fv',
      },
      u_opacities: {
        value: opacities,
        type: 'uniform1fv',
      },
      u_total_size: {
        value: totalSize,
        type: 'uniform1f',
      },
      u_dot_size: {
        value: dotSize,
        type: 'uniform1f',
      },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return <Shader source="..." uniforms={uniforms} maxFps={60} />;
};

interface Uniforms {
  [key: string]: { value: unknown; type: string };
}

const ShaderMaterial = ({
  source,
  uniforms,
  maxFps = 60,
}: {
  source: string;
  uniforms: Uniforms;
  maxFps?: number;
}) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh<
    THREE.BufferGeometry,
    THREE.Material | THREE.Material[]
  > | null>(null);
  let lastFrameTime = 0;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const timestamp = clock.getElapsedTime();
    if (timestamp - lastFrameTime < 1 / maxFps) return;
    lastFrameTime = timestamp;

    const material = ref.current.material as THREE.ShaderMaterial;
    if (material && 'uniforms' in material) {
      material.uniforms.u_time.value = timestamp;
    }
  });

  const getUniforms = () => {
    const preparedUniforms: Record<string, { value: unknown; type: string }> =
      {};

    for (const uniformName in uniforms) {
      const uniform = uniforms[uniformName];

      switch (uniform.type) {
        case 'uniform1f':
          preparedUniforms[uniformName] = { value: uniform.value, type: '1f' };
          break;
        case 'uniform3f':
          preparedUniforms[uniformName] = {
            value: new THREE.Vector3(...(uniform.value as number[])),
            type: '3f',
          };
          break;
        case 'uniform1fv':
          preparedUniforms[uniformName] = { value: uniform.value, type: '1fv' };
          break;
        case 'uniform3fv':
          preparedUniforms[uniformName] = {
            value: (uniform.value as number[][]).map(
              (v) => new THREE.Vector3(...v)
            ),
            type: '3fv',
          };
          break;
        case 'uniform2f':
          preparedUniforms[uniformName] = {
            value: new THREE.Vector2(...(uniform.value as number[])),
            type: '2f',
          };
          break;
        default:
          console.error(`Invalid uniform type for '${uniformName}'.`);
      }
    }

    // ✅ Fix: Add 'type' property for u_resolution
    preparedUniforms['u_time'] = { value: 0, type: '1f' };
    preparedUniforms['u_resolution'] = {
      value: new THREE.Vector2(size.width * 2, size.height * 2),
      type: '2f', // ✅ Ensure 'type' is present
    };

    return preparedUniforms;
  };

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `...`,
      fragmentShader: source,
      uniforms: getUniforms(),
      glslVersion: THREE.GLSL3,
    });
  }, [size.width, size.height, source, getUniforms]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const Shader: React.FC<{
  source: string;
  uniforms: Uniforms;
  maxFps?: number;
}> = ({ source, uniforms, maxFps = 60 }) => {
  return (
    <Canvas className="absolute inset-0 h-full w-full">
      <ShaderMaterial source={source} uniforms={uniforms} maxFps={maxFps} />
    </Canvas>
  );
};
