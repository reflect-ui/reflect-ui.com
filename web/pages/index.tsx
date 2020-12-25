import Head from 'next/head';
import { Button } from '@reflect-ui/react';
import styled from '@emotion/styled';

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
        <Preview>
          <Button>Button</Button>
        </Preview>
        <Section
          title="Why Reflect Button?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus vitae ligula vel porta."
        >
          <SectionImage src="/assets/illustrations/why-reflect-button.png" />
        </Section>
        <Section
          title="Contents Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus vitae ligula vel porta."
        >
          <SectionImage
            src="/assets/illustrations/icon-button.png"
            rectangle={false}
          />
        </Section>
        <Section
          title="Contents Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus vitae ligula vel porta."
        ></Section>
        <Section
          title="Contents Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus vitae ligula vel porta."
        >
          <SectionImage src="/assets/illustrations/button-in-action.png" />
        </Section>
      </DocumentWrapper>
    </>
  );
}

const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #212124;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 264px;
`;
