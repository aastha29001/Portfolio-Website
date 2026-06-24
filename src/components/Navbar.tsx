import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group cursor-pointer py-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-primary to-accent-rose flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/40 transition-shadow duration-300">
              AG
            </div>
            <span className="text-lg font-semibold text-text-primary tracking-tight">
              Aastha<span className="text-accent-primary">.</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="btn-nav"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-outline ml-3"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-4 border-t border-border-subtle space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3.5 px-5 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn btn-outline block mt-4 mx-2 text-center"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
