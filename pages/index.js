import { useState } from 'react'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';
import Team from './components/Team';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import OurLeaders from './components/OurLeaders';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'bg-[#1A1A2E] text- [#FFFFFF]' : 'bg-[#121212] text- #E0E0E0  ' }>
      <Head>
        <title>AASTUFocus</title>
        <meta name="description" content="AASTUFocus - A Protestant fellowship for AASTU students seeking faith and community." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Header />
      
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 bg-transparent text-2xl transition duration-300"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? '🌞' : '🌙'} 
        </button>
         

        <motion.section
        className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('https://i.pinimg.com/236x/42/30/8f/42308f111c442c09f186143158c71ed1.jpg')",
          objectFit: 'cover',
          width: '100%',
          height: '100%'
    
        }} 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
    
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <h1 className="text-5xl font-bold text-white mb-4 z-10">Welcome to AASTUFocus</h1>
        <p className="text-xl text-white mb-6 z-10">A Protestant fellowship for AASTU students seeking faith and community.</p>
        <a href="/contact" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded transition duration-300 z-10">
          Join Us
        </a>
      </motion.section>

    
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Events</h2>
          <Slideshow />
        </div>
      </section>

      
      <motion.section
        className="bg-gray-100 py-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved!</h2>
          <p className="mb-6 text-gray-700">Join us in our upcoming events and activities. Your participation makes a difference!</p>
          <a href="/events" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded transition duration-300">
            View Events
          </a>
        </div>
      </motion.section>
     
     
      
        <motion.section
          className="py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        <OurLeaders/>
        </motion.section>

        <motion.section
          className="py-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        <Team />
        </motion.section>

        <motion.section
          className="bg-gray-100 py-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get Involved!</h2>
            <p className="mb-6 text-gray-700">Join us in our upcoming events and activities. Your participation makes a difference!</p>
            <a href="/events" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded transition duration-300">
              View Events
            </a>
          </div>
        </motion.section>
      
      <Testimonial/>
      

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;