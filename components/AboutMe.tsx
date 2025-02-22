'use client';

import React from 'react';
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeamsWithCollision';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="py-28 relative">
      <h1 className="heading">About Me</h1>
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
