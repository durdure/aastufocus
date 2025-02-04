import Link from 'next/link';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="flex mx-auto bg-gray-900 text-white py-10 w-full">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              AASTU Focus fellowship is a Protestant fellowship dedicated to serving the AASTU community through faith, support, and outreach.
            </p>
            <p className="text-gray-400">
              Join us in our mission to empower students and foster a spirit of fellowship.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="/" className="hover:text-orange-500 transition duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition duration-300">Services</Link></li>
              <li><Link href="/events" className="hover:text-orange-500 transition duration-300">Events</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition duration-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col md:flex-row justify-center">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 mb-4 md:mb-0 md:mr-2 w-full max-w-xs ml-[14%]"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <IconButton href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <IconButton href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
        </div>

        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} AASTUFocus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
