import Head from 'next/head';
import { Button } from '@reflect-ui/react';

import AppBar from '../components/appbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Button - Reflect System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar />
    </>
  );
}
