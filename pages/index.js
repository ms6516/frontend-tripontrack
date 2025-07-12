import HeroSection from '@/components/HeroSection';
import AboutUs from '../components/AboutUs';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on load
  }, []);

  return (
    <>
      <HeroSection />
      <AboutUs />
    </>
  );
}
