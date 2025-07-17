import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import DestinationCards from '@/components/DestinationCards';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on load
  }, []);

  const destinations = [
    {
      name: 'Goa',
      location: 'India',
      image: '/Goa.jpg',
    },
    {
      name: 'Shimla',
      location: 'India',
      image: '/Shimla.jpg',
    },
    {
      name: 'Udaipur',
      location: 'India',
      image: '/Udaipur.jpg',
    },
    {
      name: 'Darjeeling',
      location: 'India',
      image: '/Darjeeling.jpg',
    },
    {
      name: 'Manali',
      location: 'India',
      image: '/Manali.jpg',
    },
  ];

  return (
    <>
      <HeroSection />
      <AboutUs />

      {/* Top Destinations Section */}
      <section className="py-16 px-4 max-w-100vw mx-auto bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-black ">Top Destinations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {destinations.map((dest, index) => (
            <DestinationCards
              key={index}
              name={dest.name}
              location={dest.location}
              image={dest.image}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/destinations"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            View More
          </a>
        </div>
      </section>
    </>
  );
}
