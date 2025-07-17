import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Navbar from './Navbar';
import SplitText from './SplitText';
import ShinyText from './ShinyText';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center pl-8 md:pl-24">
        <div className="max-w-2xl">
          <SplitText
            text="Explore the World    Smartly"
            className="text-5xl md:text-6xl font-bold font-syne text-white"
            splitType="chars"
            delay={100}
            duration={0.6}
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-100px"
            textAlign="left"
          />
          <p className="text-white text-lg mt-5">
          Personalized trips tailored to your preferences, budget, and vibe.
          </p>

          
          <button className="mt-5 group inline-flex items-center gap-4 px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105">
          <ShinyText text="Booking Now" speed={2.5} />
  
           {/* Arrow inside a circle */}
          <span className="w-8 h-8 flex items-center justify-center bg-whie rounded-full border border-white group-hover:bg-white group-hover:text-black transition">
           ↗
          </span>
          </button>


        </div>
        
      </div>

      {/* Social Icons on Right Side */}
      <div className="absolute bottom-1/4 right-8 transform -translate-y-1/2 z-10 flex flex-col gap-4">
  {/* Instagram */}
  <a href="https://www.instagram.com/muss2113/" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition">
      <FaInstagram className="text-white text-xl" />
    </div>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/muskanjain2113/" target="_blank" rel="noopener noreferrer">
    <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition">
      <FaLinkedin className="text-white text-xl" />
    </div>
  </a>

  {/* X (Twitter new logo) */}
    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
      <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-white"
       >
        <path d="M21.5 2h-4.6L12 9.8 7.1 2H2l7.5 11.4L2.3 22H7l5.2-7.7 4.3 7.7H22l-7.7-11.9L21.5 2z" />
       </svg>
      </div>
    </a>
    </div>
    {/* Explore More - Bottom Right */}
<div className="absolute bottom-10 right-8 z-10">
  <button className="text-white text-sm md:text-base font-medium flex items-center gap-2 hover:translate-y-1 transition-transform duration-300">
    Explore More
    <span className="text-xl">↓</span>
  </button>
</div>


    </section>
  );
}
