import { useState, useEffect } from 'react';
import { FiSun } from 'react-icons/fi';
import { MdDarkMode } from 'react-icons/md';

export default function Navbar() {
  // const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check for user's system preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Scroll listener for transparency
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const toggleTheme = () => {
  //   if (isDark) {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('theme', 'light');
  //   } else {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('theme', 'dark');
  //   }
  //   setIsDark(!isDark);
  // };



  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm text-white' : 'bg-[#f5f5f5] shadow-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent" href="#home">
          JustInvoice
        </h1>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-indigo-500">Home</a></li>
          <li><a href="#features" className="hover:text-indigo-500">Features</a></li>
          <li><a href="#workSteps" className="hover:text-indigo-500">How it Works</a></li>
          <li><a href={location.pathname === "/create-invoice" ?"/create-invoice#pricing" : "#pricing" } 
          className="hover:text-indigo-500">Pricing</a></li>
          <li><a href="#faq" className="hover:text-indigo-500">FAQ</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? <FiSun  size={18} /> : <MdDarkMode  size={18} />}
          </button> */}
          <a
            href="#home"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition-opacity duration-300 opacity-90 hover:opacity-100"
          >
            Try It Free
          </a>
        </div>
      </div>
    </nav>
  );
}
