import { useState } from 'react';
import { Menu, X, Glasses } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center text-2xl font-bold text-blue-600">
            <Glasses size={24} className="mr-2" />
            VisionCare
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#appointment" className="text-gray-700 hover:text-blue-600">Appointments</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#appointment"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Appointments
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;