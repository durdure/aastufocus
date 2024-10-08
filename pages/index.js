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
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Represents light mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Represents dark mode
import Hero from './components/Hero';
import Link from 'next/link';

const Home = () => {



  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/Focusbg.png",
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image: "/docs/images/blog/image-2.jpg",
      title: "New Innovations in Tech",
      description: "Exploring the latest innovations that are shaping the future of technology.",
    },
    {
      image: "/docs/images/blog/image-3.jpg",
      title: "The Rise of AI",
      description: "A deep dive into how AI is transforming industries around the world.",
    },
  ];
  
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      background: {
        default: isDarkMode ? '#312e81' : '#f4f4f4',
        paper: isDarkMode ? '#312e81' : '#ffffff',
      },
      text: {
        primary: isDarkMode ? '#e0e0e0' : '#000000',
        secondary: isDarkMode ? '#b0b0b0' : '#555555',
      },
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#ff4081', 
      },
    },
  });

  

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Aastu Focus | Fellowship</title>
        <meta name="description" content="AASTUFocus - A Protestant fellowship for AASTU students seeking faith and community." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Aastu Focus</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Get started
            </button>
            <button 
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
              onClick={toggleMobileMenu}
              aria-controls="navbar-sticky" 
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>

          <div className={`items-center justify-between ${isMobileMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       
      <div style={{ backgroundColor: theme.palette.background.paper, height:"auto"}} >
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>
          <div className="flex justify-end p-4 color-gray-900">
            <IconButton onClick={toggleDarkMode} color="inherit">
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
   
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
           
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              AASTU 
            </span>
            <br/>
          
            <span className="text-blue-600 dark:text-blue-500">
            Focus  
            </span>
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
                Fellowship
            </span>
            </h1>

            <h1 class="flex items-center text-5xl font-extrabold dark:text-white ml-[10%]">
            </h1>

            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              “Hojiitti dadhabuu, rakkina, halkan baayees hirriba malee buluu, beela, dheebuu, yeroo baayee hagabuu taauu, qorra keessatti qullaa tauu baachaan ture,”
                — 2Qor. 11:27
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get started
              </Link>
              <Link href="#" className="text-sm font-semibold leading-6" 
              style={{ backgroundColor: theme.palette.background.paper }}
              >
                Learn more 
                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          
          <div className="mt-[20%]">
            <iframe
              className="h-80 w-full rounded-lg"
              src="https://www.youtube.com/embed/JIora3Trhdk"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>


    


   
      <section style={{ backgroundColor: theme.palette.background.paper }}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
              <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
              Sangalee Jiraan
            </span>: The Final Frontier</h1>
              
              <p className="m-3 text-left text-gray-500 dark:text-gray-400 first-line:uppercase 
              first-line:tracking-widest first-letter:text-7xl first-letter:font-bold
               first-letter:text-gray-900 dark:first-letter:text-gray-100 
               first-letter:me-3 first-letter:float-start">
              Ani adeemsa haraa borii keessatti bishaan guutuudhaan doorsifamaa,
               warra saamtuudhaan doorsifamaa, saba kootiin doorsifamaa, warra saba koo hin 
               tainiin doorsifamaa, mandara keessatti doorsifamaa, lafa onaa keessatti doorsifamaa, 
               galaana irratti doorsifamaa, obboloota sobaatiin doorsifamaa tureera.”
              —  <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
              2Qor. 11:26
            </span>
              </p>
             
            </div>

          </div>


          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="Shooting Stars" className="object-cover object-center h-full w-full" src="/Focusbg.png" />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">Shooting Stars</h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.
              </p>
              <a className="text-indigo-400 inline-flex items-center mt-3">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="The Catalyzer" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">The Catalyzer</h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.
              </p>
              <a className="text-indigo-400 inline-flex items-center mt-3">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="The 400 Blows" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">The 400 Blows</h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.
              </p>
              <a className="text-indigo-400 inline-flex items-center mt-3">
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="phttp://localhost:3000y-10 mb-3" style={{ backgroundColor: theme.palette.background.paper }}>
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4" style={{ color: theme.palette.text.primary }}>Get Involved!</h2>
          <p className="mb-6" style={{ color: theme.palette.text.secondary }}>Join us in our upcoming events and activities. Your participation makes a difference!</p>
          <a href="/events" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300">
            View Events
          </a>
        </div>
      </section>

        
    
    </div>

        

    




    
      

      <section className="py-10">
        <Team />
      </section>

      <Testimonial />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;