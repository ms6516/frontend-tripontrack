'use client';
import CountUp from 'react-countup';
import { FaGlobeAsia, FaMapMarkedAlt, FaUsers } from 'react-icons/fa';


export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-white text-black py-20 px-6 md:px-24">
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins">About Us</h2>
        <p className="text-lg md:text-xl font-light leading-relaxed">
          At TripOnTrack, we are redefining travel by combining smart tech, personalization, and seamless planning. Our AI-powered travel assistant helps you plan your journeys based on your vibe, interests, and budget — all in one place.
        </p>

        <p className="mt-4 text-lg md:text-xl font-light leading-relaxed">
          Whether you're looking for solo escapes, group adventures, or weekend getaways, our platform adapts to your preferences and makes itinerary creation effortless. Say goodbye to messy spreadsheets and endless tabs — and hello to curated experiences.
        </p>
      </div>

      {/* ⬇ Counter Section inside About Us */}
      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div>
          <h3 className="text-7xl font-bold text-black-600">
          {/* <FaGlobeAsia className="text--600 text-3xl mx-auto mb-2" /> */}
            <CountUp end={100} duration={3} suffix="+" />
          </h3>
          <p className="mt-2 text-2lg font-medium text-gray-400">Destinations Covered</p>
        </div>

        <div>
          <h3 className="text-7xl font-bold text-black-600">
          {/* <FaGlobeAsia className="text-blue-600 text-3xl mx-auto mb-2" /> */}
            <CountUp end={500} duration={3} suffix="+" />
          </h3>
          <p className="mt-2 text-2lg font-medium text-gray-400">Trips Planned</p>
        </div>

        <div>
          <h3 className="text-7xl font-bold text-black-600">
          {/* <FaGlobeAsia className="text-blue-600 text-3xl mx-auto mb-2" /> */}
            <CountUp end={2000} duration={3} suffix="+" />
          </h3>
          <p className="mt-2 text-2lg font-medium text-gray-400">Happy Users</p>
        </div>
      </div>
    </section>
  );
}
