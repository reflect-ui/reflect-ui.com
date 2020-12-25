import React from 'react';
import styled from '@emotion/styled';

import AppBar from './appbar';

const DocumentWrapper: React.FC = ({ children }) => {
  return (
    <>
      <AppBar />

      <Wrapper>
        <Container>
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
      </Wrapper>
    </>
  );
};

export default DocumentWrapper;

const Wrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 48px;
  padding-left: 80px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
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
