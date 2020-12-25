import React from 'react';
import styled from '@emotion/styled';

interface ISection {
  title: string;
  description?: string;
}

const Section: React.FC<ISection> = ({ title, description, children }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Header>
      {children}
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.section`
  margin: 36px 0;
`;

const Header = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 1.5;
  color: #ffffff;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: #828282;
`;
