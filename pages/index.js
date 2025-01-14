import { useState } from 'react'; 
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import Footer from './components/Footer';
import Team from './components/Team';
import Head from 'next/head';
import Testimonial from './components/Testimonial';
import { IconButton } from '@mui/material'; 
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Represents light mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Represents dark mode
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
        paper: isDarkMode ? '#312e81' : '#D1D5DB',
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
      <nav className="bg-[#D1D5DB] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
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
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#D1D5DB] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#D1D5DB] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 Edu AU VIC WA NT Dots">
              AASTU 
            </span>
            <br/>
          
            <span className="text-blue-600 dark:text-blue-500">
            Focus  
            </span>
            <span className="bg-blue-100 text-blue-800 text-3xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
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
        


      <section 
      style={{ backgroundColor: theme.palette.background.paper }}
      >
        <div  class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Leaders</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
        </div> 

{/* --------------------------------------------------------------------------- */}

<div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <img alt="The Catalyzer" className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://dummyimage.com/1204x504" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Bonnie Green</a>
            </h3>
            <p>CEO/Co-founder</p>
            <div className="text-center text-gray-500 dark:text-gray-400">         
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                    <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                        </svg>
                    </a>
                </li>
            </ul>

          </div> 
               <div className="text-center text-gray-500 dark:text-gray-400">
          <img 
              className="mx-auto mb-4 w-36 h-36 rounded-full" 
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" 
              alt="Helene Avatar" 
          />    
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Helene Engels</a>
            </h3>
            <p>CTO/Co-founder</p>
            <ul className="flex justify-center mt-4 space-x-4">
                <li>
                    <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
          </div> <div class="text-center text-gray-500 dark:text-gray-400">
          <img 
              class="mx-auto mb-4 w-36 h-36 rounded-full" 
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" 
              alt="Jese Avatar" 
          />
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Jese Leos</a>
          </h3>
          <p>SEO & Marketing</p>
          <ul class="flex justify-center mt-4 space-x-4">
              <li>
                  <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                      <svg 
                          class="w-6 h-6" 
                          fill="currentColor" 
                          viewBox="0 0 24 24" 
                          aria-hidden="true"
                      >
                          <path 
                              fill-rule="evenodd" 
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                              clip-rule="evenodd" 
                          />
                      </svg>
                  </a>
              </li>
              <li>
                  <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                      <svg 
                          class="w-6 h-6" 
                          fill="currentColor" 
                          viewBox="0 0 24 24" 
                          aria-hidden="true"
                      >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                  </a>
              </li>
              <li>
                  <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                      <svg 
                          class="w-6 h-6" 
                          fill="currentColor" 
                          viewBox="0 0 24 24" 
                          aria-hidden="true"
                      >
                          <path 
                              fill-rule="evenodd" 
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
                              clip-rule="evenodd" 
                          />
                      </svg>
                  </a>
              </li>
              <li>
                  <a href="#" class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                      <svg 
                          class="w-6 h-6" 
                          fill="currentColor" 
                          viewBox="0 0 24 24" 
                          aria-hidden="true"
                      >
                          <path 
                              fill-rule="evenodd" 
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" 
                              clip-rule="evenodd" 
                          />
                      </svg>
                  </a>
              </li>
          </ul>
      </div>
      <div class="text-center text-gray-500 dark:text-gray-400">
          <img 
              class="mx-auto mb-4 w-36 h-36 rounded-full" 
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" 
              alt="Joseph Mcfall Avatar" 
          />
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Joseph Mcfall</a>
          </h3>
          <p>Sales</p>
          <ul class="flex justify-center mt-4 space-x-4">
              <li>
                  <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                      <svg 
                          class="w-6 h-6" 
                          fill="currentColor" 
                          viewBox="0 0 24 24" 
                          aria-hidden="true"
                      >
                          <path 
                              fill-rule="evenodd" 
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                              clip-rule="evenodd" 
                          />
                      </svg>
                  </a>
              </li>
              <li>
                  <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                      <svg 
                          class="w-6 h-6" 
                          fill="currentColor" 
                          viewBox="0 0 24 24" 
                          aria-hidden="true"
                      >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                  </a>
              </li>
              <li>
                  <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                      <svg 
                          class="w-6 h-6" 
                          fill="currentColor" 
                          viewBox="0 0 24 24" 
                          aria-hidden="true"
                      >
                          <path 
                              fill-rule="evenodd" 
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
                              clip-rule="evenodd" 
                          />
                      </svg>
                  </a>
              </li>
              <li>
                  <a href="#" class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                      <svg 
                          class="w-6 h-6" 
                          fill="currentColor" 
                          viewBox="0 0 24 24" 
                          aria-hidden="true"
                      >
                          <path 
                              fill-rule="evenodd" 
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" 
                              clip-rule="evenodd" 
                          />
                      </svg>
                  </a>
              </li>
          </ul>
      </div>
      </div>

      {/* -------------------------------------------------------------------------------------- */}
            







      </div>
          
   </section>
    {/* -------------------------------------------------------------------------------------------------------------------------- */}
   <section id='testemonials' className='py-20'
     style={{ backgroundColor: theme.palette.background.paper }}
   >
        <div className='transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100'>
          <div className='mb-12 space-y-5 md:mb-16 md:text-center'>
            <div className='inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40'>
            Words from Others
            </div>
            <h1 className='mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl'>
            Its not just us.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                    Here s what others have to say about us.
                </p>
          </div>
        </div>


      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
        <ul className='space-y-8 '>

          <li className='text-sm leading-6'>
            <div className='relative group'>
              <div className='absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200'>
              </div>
              <a href="https://twitter.com/kanyewest" className="cursor-pointer">
              <div
                className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                <div className="flex items-center space-x-4">
                  <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"/>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                        <p className="text-gray-500 text-md">Engineer &amp; Worshiper</p>
                    </div>
                </div>
                <p className="leading-normal text-gray-300 text-md">Find God.</p>
            </div>
              </a>
            </div>
          </li>



          <li className="text-sm leading-6">
            <div className="relative group">
                <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                </div>
                <a href="https://twitter.com/tim_cook" class="cursor-pointer">
                    <div
                        className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div className="flex items-center space-x-4"><img
                                src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                <p className="text-gray-500 text-md">Hojjaata Wangeela</p>
                            </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                            aliquam malesuada bibendum.</p>
                    </div>
                </a>
            </div>
          </li>
          <li className="text-sm leading-6">
            <div className="relative group">
                <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                </div><a href="https://twitter.com/kanyewest" class="cursor-pointer">
                    <div
                        className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div className="flex items-center space-x-4"><img
                                src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                                className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West"/>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                                <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                            </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">Find God.</p>
                    </div>
                </a>
            </div>
          </li>
          <li className="text-sm leading-6">
            <div className="relative group">
                <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                    <div
                        className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                        <div className="flex items-center space-x-4"><img
                                src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                                className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                                <p className="text-gray-500 text-md">CEO of Apple</p>
                            </div>
                        </div>
                        <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                            aliquam malesuada bibendum.</p>
                    </div>
                </a>
            </div>
          </li>


        </ul>
        <ul className="hidden space-y-8 sm:block">
        <li className="text-sm leading-6">
          <div className="relative group">
            <div
                className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                <div
                    className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal"/>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Parag Agrawal</h3>
                            <p className="text-gray-500 text-md">CEO of Twitter</p>
                        </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                        semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                        pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                </div>
            </a>
          </div>
        </li>
        <li class="text-sm leading-6">
          <div class="relative group">
            <div
                class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
            </div><a href="https://twitter.com/paraga" class="cursor-pointer">
                <div
                    class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div class="flex items-center space-x-4"><img
                            src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                            class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal"/>
                        <div>
                            <h3 class="text-lg font-semibold text-white">Parag Agrawal</h3>
                            <p class="text-gray-500 text-md">CEO of Twitter</p>
                        </div>
                    </div>
                    <p class="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                        semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                        pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                </div>
            </a>
          </div>
        </li>
        <li class="text-sm leading-6">
          <div class="relative group">
              <div
                  class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
              </div><a href="https://twitter.com/tim_cook" class="cursor-pointer">
                  <div
                      class="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div class="flex items-center space-x-4"><img
                              src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                              class="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook"/>
                          <div>
                              <h3 class="text-lg font-semibold text-white">Tim Cook</h3>
                              <p class="text-gray-500 text-md">CEO of Apple</p>
                          </div>
                      </div>
                      <p class="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                          fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                          aliquam malesuada bibendum.</p>
                  </div>
              </a>
          </div>
          </li>
        </ul>
        <ul className="hidden space-y-8 lg:block">
        <li className="text-sm leading-6">
          <div className="relative group">
              <div
                  className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
              </div><a href="https://twitter.com/satyanadella" class="cursor-pointer">
                  <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4"><img
                              src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                              className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella"/>
                          <div>
                              <h3 className="text-lg font-semibold text-white">Satya Nadella</h3>
                              <p className="text-gray-500 text-md">CEO of Microsoft</p>
                          </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
                          tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                          eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                  </div>
              </a>
          </div>
        </li>
        <li class="text-sm leading-6">
          <div class="relative group">
              <div
                  className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
              </div><a href="https://twitter.com/dan_schulman" class="cursor-pointer">
                  <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4"><img
                              src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                              className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman"/>
                          <div>
                              <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                              <p className="text-gray-500 text-md">CEO of PayPal</p>
                          </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                          et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                  </div>
              </a>
          </div>
        </li>
        <li className="text-sm leading-6">
          <div class="relative group">
              <div
                  className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
              </div><a href="https://twitter.com/dan_schulman" class="cursor-pointer">
                  <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4"><img
                              src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                              className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman"/>
                          <div>
                              <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                              <p className="text-gray-500 text-md">CEO of PayPal</p>
                          </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                          et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                  </div>
              </a>
          </div>
                </li>
        </ul>

      </div> 
      

   </section>
  </div>

        

    




    
      

      <section className="py-10">
        <Team />
      </section>

     

       
      <Footer />
    </ThemeProvider>
  );
};

export default Home;