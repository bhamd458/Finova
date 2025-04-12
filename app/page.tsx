'use client';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AITech from '../components/AITech';
import Demo from '../components/Demo';
import Contact from '../components/Contact';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <Features />
      <AITech />
      <Demo />
      <Contact />
    </main>
  );
}
