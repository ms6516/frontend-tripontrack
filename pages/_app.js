// pages/_app.js or app/layout.js
import '../styles/globals.css';
import { Poppins, Syne, Rubik } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-syne',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-rubik',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} ${syne.variable} ${rubik.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
