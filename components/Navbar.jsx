'use client';
import { useState } from 'react';
import ShinyText from './ShinyText';
import SignInModal from './SignInModal'; // ✅ import modal component
import SignUpModal from './SignUpModal';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  // const [rememberMe, setRememberMe] = useState(false);


  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/">
        <Image
          src="/logo.png" // Replace with your actual logo path
          alt="Company Logo"
          width={180} // Adjust width as needed
          height={80}  // Adjust height as needed
          className="cursor-pointer"
          color='white'
        />
      </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex justify-center absolute left-1/2 transform -translate-x-1/2 w-full">
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
              onClick={() => setShowSignIn(true)}
              className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              <ShinyText text="Sign In" speed={2.5} />
            </button>
            <button 
            onClick={() => setShowSignUp(true)}
             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition">
              <ShinyText text="Sign Up" speed={2.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sign In Modal */}
      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </>
  );
}
