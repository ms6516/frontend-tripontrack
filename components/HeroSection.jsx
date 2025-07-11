import Navbar from './Navbar';

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
      <div className="relative z-10 h-full flex items-center pt-24 pl-8 md:pl-24">
        <div className="max-w-2xl">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight font-syne">
            Explore the World<br />Smartly
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white font-light max-w-md">
            Personalized trips tailored to your preferences, budget, and vibe.
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
}
