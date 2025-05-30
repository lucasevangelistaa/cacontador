import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaChartLine } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Orientação dos Links
  const navLinks = [
    { name: "Início", to: "home" },
    { name: "Sobre Mim", to: "about" },
    { name: "Compromissos", to: "appointments" },
    { name: "Serviços", to: "services" },
    { name: "Contato", to: "contact" },
  ];

  return (
    <Motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <FaChartLine className="text-3xl h-12 text-[#1E6235]" />
          <span className="ml-2 font-bold text-lg text-[#1E6235]">
            Carlos Contador
          </span>
        </Motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer font-medium text-gray-700 hover:text-[#1E6235] transition-colors"
              activeClass="text-[#1E6235] font-semibold"
              spy={true}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white py-4 px-4 shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer font-medium text-gray-700 hover:text-[#1E6235] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </Motion.div>
      )}
    </Motion.header>
  );
};

export default Header;
