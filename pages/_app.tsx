import '../styles/globals.css'
import type { AppProps } from 'next/app'
// Initial the Yup custom validators 
import * as bootstrap from './../src/validators';

function MyApp({ Component, pageProps }: AppProps) {
  bootstrap.initCardValidations();
  return <Component {...pageProps} />
}

export default MyApp
