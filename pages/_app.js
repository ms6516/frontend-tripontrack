import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import '../styles/shiny-text.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={poppins.variable}>
      <Component {...pageProps} />
    </div>
  );
}
