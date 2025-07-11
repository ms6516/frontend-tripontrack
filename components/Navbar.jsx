import ShinyText from "./ShinyText";

export default function Navbar() {
    return (
      <nav className="absolute top-0 left-0 w-full z-50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="text-white text-2xl font-bold font-poppins">TripOnTrack</div>
  
          {/* Center Navigation */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="hidden md:flex gap-10 text-white text-lg font-medium">
              <li><a href="#">Home</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Itinerary</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
  
          {/* Buttons */}
          <div className="flex gap-4">
            <button className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              <ShinyText text="Sign In" speed={2.5} />
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-800 text-white px-4 py-2 rounded-full transition">
            <ShinyText text="Sign Up" speed={2.5} />
            </button>
          </div>
        </div>
      </nav>
    );
  }
  