import React from 'react';
import '../styles/globals.css';

interface IMyApp {
  Component: React.ComponentType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: IMyApp) {
  return <Component {...pageProps} />;
}

export default MyApp;
