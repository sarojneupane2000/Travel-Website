import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import { data } from './data';

const SearchBar = ({ handleSearch, filteredData }) => {
  return (
    <div className='mx-20 my-10'>
      <h1 className='font-bold text-5xl text-orange-400'>Find Your Adventure / Itineraries</h1>
      <div className="relative mt-4 max-w-7xl mx-auto">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FaSearch className="text-gray-400" />
        </span>
        <input
          type="text"
          className="w-full py-3 pl-10 pr-14 border-b-2 border-gray-400 focus:outline-none focus:border-orange-400"
          placeholder='Search activities or tours'
          onChange={handleSearch} // Pass the handler directly to onChange
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center justify-center bg-blue-500 text-white rounded-full w-10 h-10 mr-3"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className='mx-20 my-20'>
        <h1 className='font-bold text-5xl text-orange-600 text-center'>Most Popular Tours</h1>
        <p className='font-bold text-xl text-center my-3 font-serif'>We have a unique way of meeting your adventurous expectations!</p>
        <div className='flex gap-10 my-10 flex-wrap'>
          {filteredData.map((tour, index) => (
            <div className="relative w-[310px]" key={index}>
              <img src={tour.image} alt={tour.title} className="h-[330px] w-[350px] object-cover rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-blue-900">View All</button>
              </div>
              <div className="absolute top-4 left-4 bg-gray-200 text-black py-1 px-3 rounded">
                {tour.days}
              </div>
              <p className="mt-4">{tour.activity}</p>
              <h3 className="text-blue-900 font-bold font-mono text-2xl">{tour.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [query, setQuery] = useState(''); // Initialize query state
  const [filteredData, setFilteredData] = useState(data); // State to hold filtered data

  const images = [
    {
      src: "https://www.shangrilavoyages.com/wp-content/uploads/2023/12/Lhotse3-1-scaled-e1703755789528.jpg",
      title: "Mount Lhotse",
      description: "Lhotse Peak - 8,516 meters",
      duration: "17 days"
    },
    {
      src: "https://www.shangrilavoyages.com/wp-content/uploads/2022/05/CRW_5506_RJ.jpg",
      title: "Everest Base Camp",
      description: "Starting Point for Everest Climbers",
      duration: "14 days"
    },
    {
      src: "https://www.shangrilavoyages.com/wp-content/uploads/2022/05/Dolpa2.jpg",
      title: "Dolpa Region",
      description: "Remote and Beautiful Dolpa",
      duration: "10 days"
    },
    {
      src: "https://www.shangrilavoyages.com/wp-content/uploads/2022/05/DSC_5608.jpg",
      title: "Kathmandu Valley",
      description: "Cultural Heart of Nepal",
      duration: "8 days"
    }
  ];

  const autoSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm); // Update query state with user input
    const filtered = data.filter(destiny =>
      destiny.title.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered); // Update filtered data state
  };

  return (
    <div>
      <div className="relative w-full mx-auto overflow-hidden">
        <div className="relative w-full h-screen">
          <div className="relative w-full h-full">
            <img src={images[current].src} alt={`Slide ${current}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <div className="text-center">
                <h1 className="text-3xl font-bold">{images[current].title}</h1>
                <p className="text-lg">{images[current].description}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2" onClick={prevSlide}>Prev</button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2" onClick={nextSlide}>Next</button>
      </div>
      <SearchBar handleSearch={handleSearch} filteredData={filteredData} />
    </div>
  );
};

export default Home;
