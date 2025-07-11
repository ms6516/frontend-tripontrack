'use client';
import { useState } from 'react';
import ShinyText from './ShinyText';
import SignInModal from './SignInModal'; // ✅ import modal component

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="text-white text-2xl font-bold font-syne">TripOnTrack</div>

          {/* Center Navigation */}
          <div className="hidden md:flex justify-center absolute left-1 transform -translate-x-1/2 w-full">
            <ul className="flex gap-10 text-white text-lg font-medium">
              <li><a href="#">Home</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Itinerary</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              <ShinyText text="Sign In" speed={2.5} />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition">
              <ShinyText text="Sign Up" speed={2.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sign In Modal */}
      {showModal && <SignInModal onClose={() => setShowModal(false)} />}
    </>
  );
}
