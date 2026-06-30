'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 64);
    const handleObserver = () => {
      const sections = ['about', 'experience', 'projects', 'side-projects', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleObserver);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleObserver);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'side-projects', label: 'Side Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-[#C7D0FF]/90 backdrop-blur-sm border-b border-[#A8B4F0]/50' : 'bg-[#C7D0FF] border-b border-[#A8B4F0]'}`}>
      <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold text-gray-900 hover:text-black transition-colors cursor-pointer"
        >
          Jayden.
        </button>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-gray-800 hover:text-black transition-colors cursor-pointer relative group"
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
