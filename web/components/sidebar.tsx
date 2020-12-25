import React from 'react';
import styled from '@emotion/styled';

import useWindowSize from '../utils/useWindowSize';

interface ISidebar {
  style?: React.CSSProperties;
}

const Sidebar: React.FC<ISidebar> = ({ style }) => {
  const { screenWidth = 1440 } = useWindowSize();
  return <Container style={{ ...style, width: screenWidth * 0.16 }} />;
};

export default Sidebar;

const Container = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #262626;
`;
