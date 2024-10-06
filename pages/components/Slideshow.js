import { useState } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://i.pinimg.com/236x/e2/02/78/e20278e979682bdabf6127baf95c1ef1.jpg',
    caption: 'Join us in faith and fellowship!',
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/236x/ba/a6/e4/baa6e42b59f4da17e886fbe0bb7539d1.jpg',
    caption: 'Empowering students through community service.',
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/236x/85/a5/00/85a5006b3eba199cec9ae0efaa356532.jpg',
    caption: 'Weekly gatherings for spiritual growth.',
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='flex flex-col items-center p-4'>
      <div className="relative w-full max-w-md h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt={slide.caption} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-lg md:text-2xl font-semibold shadow-md">{slide.caption}</h2>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white rounded-full p-2 transition duration-300 ease-in-out hover:bg-opacity-100"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white rounded-full p-2 transition duration-300 ease-in-out hover:bg-opacity-100"
        >
          &#10095;
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${index === currentSlide ? 'bg-orange-500' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
