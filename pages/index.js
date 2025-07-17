import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import DestinationCards from '@/components/DestinationCards';

export default function Home() {
  const [showFullPage, setShowFullPage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const destinations = [
    { name: 'Goa', location: 'India', image: '/Goa.jpg' },
    { name: 'Shimla', location: 'India', image: '/Shimla.jpg' },
    { name: 'Udaipur', location: 'India', image: '/Udaipur.jpg' },
    { name: 'Darjeeling', location: 'India', image: '/Darjeeling.jpg' },
    { name: 'Manali', location: 'India', image: '/Manali.jpg' },
    { name: 'Kerala', location: 'India', image: '/Kerala.jpg' },
    { name: 'Leh', location: 'India', image: '/Leh.jpg' },
  ];

  const moreDestinations = [
    // { name: 'Kerala', location: 'India', image: '/Kerala.jpg' },
    { name: 'Jaipur', location: 'India', image: '/Jaipur.jpg' },
    { name: 'Rishikesh', location: 'India', image: '/Rishikesh.jpeg' },
    { name: 'Haridwar', location: 'India', image: '/Haridwar.jpg' },
    { name: 'Vrindavan', location: 'India', image: '/Vrindavan.jpeg' },
    { name: 'Jodhpur', location: 'India', image: '/Jodhpur.jpg' },
    { name: 'Jaisalmer', location: 'India', image: '/Jaisalmer.jpg' },
    { name: 'Nainital', location: 'India', image: '/Nainital.jpg' },
    { name: 'Varanasi', location: 'India', image: '/Varanasi.jpg' },
    { name: 'Mussoorie', location: 'India', image: '/Mussoorie.jpg' },
    { name: 'Mysore', location: 'India', image: '/Mysore.jpg' },
    { name: 'Hampi', location: 'India', image: '/Hampi.jpg' },
    { name: 'Ladakh', location: 'India', image: '/Ladakh.jpg' },
    { name: 'Ujjain', location: 'India', image: '/Ujjain.jpeg' },
    { name: 'Pondicherry', location: 'India', image: '/Pondicherry.jpeg' },
    { name: 'Ooty', location: 'India', image: '/Ooty.jpg' },
    { name: 'Srinagar', location: 'India', image: '/Srinagar.jpg' },
    { name: 'Bhimashankar', location: 'India', image: '/Bhimashankar.jpeg' },
    { name: 'Ellora Caves', location: 'India', image: '/Ellora.jpeg' },
    // { name: 'Leh', location: 'India', image: '/Leh.jpg' },
  ];

  const handleViewMore = () => setShowFullPage(true);
  const handleBack = () => setShowFullPage(false);

  return (
    <>
      {/* Normal Home Page */}
      {!showFullPage && (
        <>
          <HeroSection />
          <AboutUs />

          <section className="py-16 px-4 max-w-100vw mx-auto bg-white">
            <h2 className="text-3xl font-bold text-center mb-10 text-black">Top Destinations</h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-5">
                {destinations.map((dest, index) => (
                  <DestinationCards key={index} {...dest} />
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={handleViewMore}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
              >
                View More
              </button>
            </div>
          </section>
        </>
      )}

      {/* Full Page Section on View More */}
      {showFullPage && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="py-8 px-6">
            <h2 className="text-4xl font-bold text-center text-black mb-8">All Destinations</h2>

            {/* Combined Destinations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {[...destinations, ...moreDestinations].map((dest, index) => (
                <DestinationCards key={index} {...dest} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={handleBack}
                className="inline-block bg-gray-300 text-black px-6 py-3 rounded-full hover:bg-gray-400 transition"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
