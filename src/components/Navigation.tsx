'use client';

import { useEffect, useRef, useState } from 'react';
import { SmileyIcon, BriefcaseIcon, FolderIcon, SparklesIcon, PlaneIcon } from '@/components/ui/SectionIcons';

const navItems = [
  { id: 'about', label: 'About', Icon: SmileyIcon, iconHover: 'group-hover:-rotate-12 group-hover:scale-110' },
  { id: 'experience', label: 'Experience', Icon: BriefcaseIcon, iconHover: 'group-hover:rotate-6 group-hover:scale-110' },
  { id: 'projects', label: 'Projects', Icon: FolderIcon, iconHover: 'group-hover:rotate-12 group-hover:scale-110' },
  { id: 'side-projects', label: 'Side Projects', Icon: SparklesIcon, iconHover: 'group-hover:rotate-[20deg] group-hover:scale-125' },
  { id: 'contact', label: 'Contact', Icon: PlaneIcon, iconHover: 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-12' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 64);
    const handleObserver = () => {
      if (isNavigatingRef.current) return;
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
    const handleScrollEnd = () => {
      isNavigatingRef.current = false;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleObserver);
    window.addEventListener('scrollend', handleScrollEnd);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleObserver);
      window.removeEventListener('scrollend', handleScrollEnd);
      if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    isNavigatingRef.current = true;
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
    // Fallback in case the browser doesn't fire `scrollend` (e.g. older Safari).
    navigationTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1000);

    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const activeItem = itemRefs.current[activeSection];
    const container = scrollContainerRef.current;
    if (!activeItem || !container) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    const target =
      container.scrollLeft +
      (itemRect.left - containerRect.left) -
      container.clientWidth / 2 +
      itemRect.width / 2;
    container.scrollTo({ left: target, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-[#C7D0FF]/90 backdrop-blur-sm border-b border-[#A8B4F0]/50' : 'bg-[#C7D0FF] border-b border-[#A8B4F0]'}`}>
      <div className="max-w-5xl mx-auto pl-4 pr-0 sm:px-8 py-4 flex items-center h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold text-gray-900 hover:text-black transition-colors cursor-pointer shrink-0"
        >
          Jayden.
        </button>

        <div
          ref={scrollContainerRef}
          className="flex items-center gap-8 ml-8 py-2 overflow-x-auto no-scrollbar sm:ml-auto sm:overflow-visible pr-4 sm:pr-0"
        >
          {navItems.map(({ id, label, Icon, iconHover }) => (
            <button
              key={id}
              ref={(el) => {
                itemRefs.current[id] = el;
              }}
              onClick={() => scrollToSection(id)}
              className="text-sm text-gray-800 hover:text-black transition-colors cursor-pointer relative group inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap"
            >
              <Icon className={`h-4 w-4 shrink-0 block transition-transform duration-300 ease-out ${iconHover}`} />
              {label}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${activeSection === id ? 'w-full' : 'w-0'}`} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
