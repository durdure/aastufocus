import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex mx-auto bg-gray-900 text-white py-10 w-full">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              AASTUFocus is a Protestant fellowship dedicated to serving the AASTU community through faith, support, and outreach.
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
                className="p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 mb-4 md:mb-0 md:mr-2 w-full max-w-xs"
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
          <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="Twitter">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="LinkedIn">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} AASTUFocus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;