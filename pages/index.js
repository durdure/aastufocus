import Header from './components/Header';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';
import Team from './components/Team';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <Head>
        <title>AASTUFocus</title>
        <meta name="description" content="AASTUFocus - A Protestant fellowship for AASTU students seeking faith and community." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <motion.section
          className="hero bg-cover bg-center min-h-screen flex flex-col justify-center text-center text-white"
          style={{ backgroundImage: "url('https://i.pinimg.com/236x/5d/ae/36/5dae36da199686e0bd9020bf889a9dfb.jpg')", 
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center"
          
          }} 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to AASTUFocus</h1>
          <p className="text-xl mb-6">A Protestant fellowship for AASTU students seeking faith and community.</p>
          <a href="/contact" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded transition duration-300">
            Join Us
          </a>
        </motion.section>
        <Slideshow />
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
      </main>

      <Footer />
    </div>
  );
};

export default Home;