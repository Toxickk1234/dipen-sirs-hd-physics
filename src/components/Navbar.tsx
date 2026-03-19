import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Atom } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = ({ theme = 'light' }: { theme?: 'light' | 'dark' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-stone-900';
  const mutedTextColor = isDark ? 'text-white/80' : 'text-stone-600';
  const borderColor = isDark ? 'border-white/30' : 'border-stone-300';
  const hoverBg = isDark ? 'hover:bg-white/10' : 'hover:bg-stone-100';
  const logoBg = isDark ? 'bg-white text-[#4D718D]' : 'bg-stone-900 text-white';
  const mobileMenuBg = isDark ? 'bg-[#4D718D]/95 border-white/10' : 'bg-white/95 border-stone-200';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`flex items-center justify-between py-6 px-6 max-w-7xl mx-auto relative z-50 ${textColor}`}>
      {/* Brand */}
      <Link to="/" className="flex items-center gap-2 md:gap-3 z-50">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white text-black font-bold flex items-center justify-center rounded-sm text-sm sm:text-base">
          <Atom className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
        </div>
        <span className="font-semibold text-lg sm:text-xl tracking-tight">HD Physics</span>
      </Link>
      
      {/* Desktop Menu */}
      <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${mutedTextColor}`}>
        {navLinks.map(link => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`${isActive(link.path) ? `${textColor} border-b-2 ${isDark ? 'border-white' : 'border-stone-900'} pb-1` : `hover:${textColor} transition-colors`}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <Link to="/contact" className={`hidden md:block px-6 py-2.5 rounded-full border ${borderColor} ${hoverBg} transition-colors text-sm font-medium`}>
        Book a Free Call
      </Link>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-full left-0 w-full backdrop-blur-lg border-t flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl ${mobileMenuBg}`}
          >
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`${isActive(link.path) ? `${textColor} font-bold` : `${mutedTextColor} font-medium`}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`px-6 py-2.5 rounded-full border ${borderColor} ${hoverBg} transition-colors text-sm font-medium mt-2 ${textColor}`}>
              Book a Free Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
