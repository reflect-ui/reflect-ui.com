import Head from 'next/head';
import { Button } from '@reflect-ui/react';

import DocumentWrapper from '../components/document-wrapper';
import Section from '../components/section';
import SectionImage from '../components/section-image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Button - Reflect System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DocumentWrapper>
        {/* <Button>Button</Button> */}
        <Section
          title="Why Reflect Button?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus vitae ligula vel porta."
        >
          <SectionImage src="/assets/illustrations/why-reflect-button.png" />
        </Section>
        <Section
          title="Contents Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus vitae ligula vel porta."
        ></Section>
        <Section
          title="Contents Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus vitae ligula vel porta."
        ></Section>
        <Section
          title="Contents Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus vitae ligula vel porta."
        ></Section>
      </DocumentWrapper>
    </>
  );
}
