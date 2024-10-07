import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex top-0 mx-auto w-full bg-gradient-to-b from-[#2d2da2] to-[#1e1e78] text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">
          <Link href="/" className="hover:text-orange-400 transition duration-300">AASTUFocus</Link>
        </h1>
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-orange-400 transition duration-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-400 transition duration-300">About Us</Link></li>
            <li><Link href="/services" className="hover:text-orange-400 transition duration-300">Services</Link></li>
            <li><Link href="/events" className="hover:text-orange-400 transition duration-300">Events</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400 transition duration-300">Contact</Link></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-4 p-4">
            <li><Link href="/" className="hover:text-orange-400 transition duration-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-400 transition duration-300">About Us</Link></li>
            <li><Link href="/services" className="hover:text-orange-400 transition duration-300">Services</Link></li>
            <li><Link href="/events" className="hover:text-orange-400 transition duration-300">Events</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400 transition duration-300">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;