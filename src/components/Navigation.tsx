'use client';

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold text-black hover:text-gray-600"
        >
          Jayden.
        </button>

        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
