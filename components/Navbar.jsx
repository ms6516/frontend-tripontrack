export default function Navbar() {
    return (
      <nav className="absolute top-0 left-0 w-full z-50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="text-white text-2xl font-bold font-roboto">TripOnTrack</div>
  
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
            <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
              Sign In
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    );
  }
  