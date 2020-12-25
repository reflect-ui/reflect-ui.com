import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@reflect-ui/react';

const Appbar: React.FC = () => {
  return (
    <Container>
      <LogoImage src="/assets/images/logo.svg" />
      <ButtonList>
        <Button>improve this page on github</Button>
        <Button>copy share to link</Button>
      </ButtonList>
    </Container>
  );
};

export default Appbar;

const Container = styled.header`
  width: 100%;
  height: 80px;
  background: #212121;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
  position: fixed;
  top: 0;
`;

const LogoImage = styled.img`
  width: 123px;
  height: 32px;
`;

const ButtonList = styled.div`
  display: flex;

  /* FIXME: should theme reflect component itself */
  & > button {
    padding: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    text-transform: capitalize;

    &:first-child {
      background: #333333;
      margin-right: 16px;
    }
  }
`;
