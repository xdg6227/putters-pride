import { useEffect } from "react";

import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Roboto } from 'next/font/google';
const roboto = Roboto({ weight: '400', style: 'normal', subsets: ['latin'] });

import PPNavigation from '@/public/javascript/navigation';
import PPFooter from '@/public/javascript/footer';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className={roboto.className}>
      <PPNavigation />
      <Component {...pageProps} />
      <PPFooter />
    </div>
  )
}