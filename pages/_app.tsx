import '../styles/globals.css'
import type { AppProps } from 'next/app'
// Initial the Yup custom validators 
import * as bootstrap from './../src/validators';

// load fontawesome styles 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas)

function MyApp({ Component, pageProps }: AppProps) {
  bootstrap.initCardValidations();
  return <Component {...pageProps} />
}

export default MyApp
