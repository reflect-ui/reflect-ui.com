import Head from 'next/head';
import { Button } from '@reflect-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Button - Reflect System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button>Button</Button>
      </main>
    </div>
  );
}
