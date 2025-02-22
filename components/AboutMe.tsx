'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeamsWithCollision';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { motion } from 'framer-motion';

// const WorldMap = dynamic(() => import('./ui/WorldMap'), { ssr: false });

const AboutMe = () => {
  const [loading, setLoading] = useState(true);

  // Simulating loading effect
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <section id="about" className="py-28 relative">
      <h1 className="heading">About Me</h1>

      {/* {loading && (
        <div className="inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full animate-pulse">
          <span className="text-white text-lg">Loading Map...</span>
        </div>
      )} */}
      {/* <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      /> */}
      <BackgroundBeamsWithCollision className="h-full dark:bg-black-100 bg-white grid md:grid-cols-3 items-center gap-4 justify-start flex-col md:py-0">
        {[
          "I'm very flexible with time zone communications",
          'Problem-Solving',
          'Leadership',
          'Team Collaboration',
          'Time Management',
          'Adaptability',
          'Critical Thinking',
          'Effective Communication',
          'Creativity',
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="p-2 rounded-xl shadow-lg bg-gray-800 text-white hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 10px 30px rgba(0, 255, 255, 0.3)',
            }}
          >
            {skill}
          </motion.div>
        ))}
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default AboutMe;
