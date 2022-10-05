import React from 'react';
import styled from '@emotion/styled';

import Appbar from './appbar';
import Sidebar from './sidebar';
import Contents from './contents';
import useWindowSize from '../utils/useWindowSize';

const DocumentWrapper: React.FC = ({ children }: React.PropsWithChildren) => {
  const { screenWidth = 1440 } = useWindowSize();
  return (
    <>
      <Appbar />
      <Wrapper>
        <Sidebar />
        <Container
          style={{
            marginLeft: screenWidth * 0.16,
            marginRight: screenWidth * 0.32,
          }}
        >
          <Header>
            <CatalogIcon src="/assets/illustrations/catalog-icons/buttons.svg" />
            <Title>Button</Title>
            <Description>
              Learn about reflect’s buttons systems and create your own button
              system
            </Description>
          </Header>
          {children}
        </Container>
        <Contents style={{ width: screenWidth * 0.32 }} />
      </Wrapper>
    </>
  );
};

export default DocumentWrapper;

const Wrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
`;

const Container = styled.div`
  padding: 48px;
  padding-left: 80px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const CatalogIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 20px;
  font-weight: bold;
  font-size: 3rem;
  line-height: 1.5;
  color: #ffffff;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  line-height: 1;
  color: #828282;
`;
