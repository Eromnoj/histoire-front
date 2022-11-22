import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'react-quill/dist/quill.snow.css'


import { Provider } from 'react-redux';
import { store } from '../stores';

function MyApp({
  Component, pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;