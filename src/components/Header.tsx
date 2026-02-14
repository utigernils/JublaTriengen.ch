import { useState, useEffect } from 'react';
import { Menu, X, TreePine } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <TreePine className={`w-8 h-8 ${isScrolled ? 'text-jubla-green' : 'text-white'}`} />
            <span
              className={`font-amatic text-3xl font-bold ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Jubla Triengen
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`font-inter font-normal transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-jubla-yellow' : 'text-white hover:text-jubla-yellow'
              }`}
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection('angebote')}
              className={`font-inter font-normal transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-jubla-yellow' : 'text-white hover:text-jubla-yellow'
              }`}
            >
              Angebote
            </button>
            <button
              onClick={() => scrollToSection('highlights')}
              className={`font-inter font-normal transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-jubla-yellow' : 'text-white hover:text-jubla-yellow'
              }`}
            >
              Programm
            </button>
            <button
              onClick={() => scrollToSection('news')}
              className={`font-inter font-normal transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-jubla-yellow' : 'text-white hover:text-jubla-yellow'
              }`}
            >
              Galerie
            </button>
            <button className="bg-jubla-yellow hover:bg-jubla-yellow-dark text-black font-inter font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105">
              Mitmachen
            </button>
          </nav>

          <button
            className={`md:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-700 hover:text-jubla-yellow font-inter"
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection('angebote')}
              className="block w-full text-left py-2 text-gray-700 hover:text-jubla-yellow font-inter"
            >
              Angebote
            </button>
            <button
              onClick={() => scrollToSection('highlights')}
              className="block w-full text-left py-2 text-gray-700 hover:text-jubla-yellow font-inter"
            >
              Programm
            </button>
            <button
              onClick={() => scrollToSection('news')}
              className="block w-full text-left py-2 text-gray-700 hover:text-jubla-yellow font-inter"
            >
              Galerie
            </button>
            <button className="w-full bg-jubla-yellow hover:bg-jubla-yellow-dark text-black font-inter font-semibold px-6 py-3 rounded-full transition-colors">
              Mitmachen
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
