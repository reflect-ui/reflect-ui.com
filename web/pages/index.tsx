import Head from 'next/head';
import { Button } from '@reflect-ui/react';

import DocumentWrapper from '../components/document-wrapper';

export default function Home() {
  return (
    <>
      <Head>
        <title>Button - Reflect System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DocumentWrapper>
        <Button>Button</Button>
      </DocumentWrapper>
    </>
  );
}
