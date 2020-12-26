import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from '@reflect-ui/react';
import { css } from '@emotion/css';
import styled from '@emotion/styled';

import DocumentWrapper from '../components/document-wrapper';
import Section from '../components/section';
import SectionImage from '../components/section-image';

// FIXME: proper export from library
enum ButtonVariants {
  filled = 'filled',
  outline = 'outline',
  ghost = 'ghost',
}

declare type TButtonVariant = keyof typeof ButtonVariants;

const tabs = [
  { title: 'Filled', value: ButtonVariants.filled },
  { title: 'Outline', value: ButtonVariants.outline },
  // { title: 'Icon', value: ButtonVariants.icon },
  { title: 'Ghost', value: ButtonVariants.ghost },
];

export default function Home() {
  const [buttonParams, setButtonParams] = useState<{
    variant: TButtonVariant;
  }>({
    variant: ButtonVariants.filled,
  });

  return (
    <>
      <Head>
        <title>Button - Reflect System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DocumentWrapper>
        <PreviewWrapper>
          <Preview>
            <Button {...buttonParams}>Button</Button>
          </Preview>
          <TabList>
            {tabs.map(({ title, value }) => (
              <Tab
                onClick={() =>
                  setButtonParams({ ...buttonParams, variant: value })
                }
                className={
                  value === buttonParams.variant
                    ? css`
                        border-bottom: 1px solid white;
                        color: white;
                        font-weight: bold;
                      `
                    : undefined
                }
              >
                {title}
              </Tab>
            ))}
          </TabList>
        </PreviewWrapper>
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

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Preview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212124;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 264px;
`;

const TabList = styled.div`
  display: flex;
  background-color: #28282a;
  border: 1px solid #333333;
`;

const Tab = styled.div`
  font-size: 14px;
  line-height: 2;
  display: flex;
  align-items: center;
  color: #929292;
  padding: 12px 24px;
  cursor: pointer;
`;
