import { useState } from 'react'; 
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Slideshow from './components/Slideshow';
import Team from './components/Team';
import Head from 'next/head';
import Testimonial from './components/Testimonial';
import OurLeaders from './components/OurLeaders';
import { IconButton } from '@mui/material'; 
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      background: {
        default: isDarkMode ? '#121212' : '#f4f4f4',
      },
      text: {
        primary: isDarkMode ? '#e0e0e0' : '#000000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      
      <div style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
        <Head>
          <title>Aastu Focus | Fellowship</title>
          <meta name="description" content="AASTUFocus - A Protestant fellowship for AASTU students seeking faith and community." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
       

        <Header />

        <div className="flex justify-end">
          <IconButton onClick={toggleDarkMode} color="inherit">
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>

       
        <section
          className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
           style={{ backgroundImage: "url('/Undesign.png')",
            backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>

          <div className="relative inset-0 flex flex-col justify-center items-center p-6 md:p-12 text-white "
       
          >
            
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 z-10">Welcome to AASTUFocus</h1>
            <p className="text-lg md:text-xl mb-6 z-10">A Protestant fellowship for AASTU students seeking faith and community.</p>
            <a href="/contact" className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded transition duration-300 z-10">
              Join Us
            </a>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Our Events</h2>
            <Slideshow />
          </div>
        </section>

        <section className="bg-gray-100 py-10 rounded-lg shadow-md">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Get Involved!</h2>
            <p className="mb-6 text-gray-700">Join us in our upcoming events and activities. Your participation makes a difference!</p>
            <a href="/events" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300">
              View Events
            </a>
          </div>
        </section>

        <section className="py-10">
          <OurLeaders />
        </section>

        <section className="py-10">
          <Team />
        </section>

        <Testimonial />

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
