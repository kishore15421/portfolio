'use client';
import { navItems } from '@/data';
import Footer from '@/components/Footer';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import AboutMe from '@/components/AboutMe';
import Hero from '@/components/Hero';
import Experiences from '@/components/Experiences';
import Approach from '@/components/Approach';
import RecentProjects from '@/components/Projects';
import { FeaturesSectionDemo } from '@/components/Skills';

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <AboutMe />
        <FeaturesSectionDemo />
        <RecentProjects />
        <Experiences />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
