import { FaLocationArrow } from 'react-icons/fa6';

import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="Green"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="skyblue"
        />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Engineering the Future of Web Experiences
          </p>
          <TextGenerateEffect
            words="From Code to Creativity—Building Scalable Digital Solutions"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <div className="relative mt-6">
            <Image
              src="/kishore.jpeg"
              alt="CR Kishore - MERN Stack Developer"
              width={160}
              height={160}
              className="rounded-full shadow-lg border-4 border-sky-500"
            />
          </div>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl font-mono">
            Hi! I&apos;m{' '}
            <span className="text-sky-500 font-bold">CR Kishore</span>, a MERN
            Stack Developer based in Chittoor. I specialize in designing and
            developing high-performance, intuitive, and scalable web
            applications using <span className="text-sky-400">React</span>,
            Next.js, <span className="text-green-500">Node.js</span>, and
            MongoDB. With a keen eye for efficiency, performance, and user
            experience, I craft seamless digital solutions that make an impact.
            I leverage AI tools like GitHub Copilot and OpenAI APIs to optimize
            development efficiency, automate testing, and enhance user
            experiences. Let&apos;s create something groundbreaking together!
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
