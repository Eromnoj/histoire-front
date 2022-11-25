import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import 'react-quill/dist/quill.snow.css'


import { Provider } from 'react-redux';
import { store, persistor } from '../stores';
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({
  Component, pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;