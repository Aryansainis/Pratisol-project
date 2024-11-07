import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Menu,
  X,
  Star,
  Shield,
  Award,
  Users
} from 'lucide-react';


//Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-700">Pratisol</div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="/" className="hover:text-green-600 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-green-600 transition-colors">About</a></li>
            <li><a href="/team" className="hover:text-green-600 transition-colors">Team</a></li>
            <li><a href="/contact" className="hover:text-green-600 transition-colors">Contact</a></li>
          </ul>

          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2"
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 text-gray-800" /> : 
              <Menu className="h-6 w-6 text-gray-800" />
            }
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg md:hidden"
              >
                <div className="pt-20 px-6">
                  <ul className="space-y-4">
                    <li><a href="/" className="block py-2 hover:text-green-600 transition-colors">Home</a></li>
                    <li><a href="/about" className="block py-2 hover:text-green-600 transition-colors">About</a></li>
                    <li><a href="/team" className="block py-2 hover:text-green-600 transition-colors">Team</a></li>
                    <li><a href="/contact" className="block py-2 hover:text-green-600 transition-colors">Contact</a></li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};


export default Header; 
