import React, { useMemo } from 'react';
import styled from '@emotion/styled';

import useWindowSize from '../utils/useWindowSize';

const SectionImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  ...props
}) => {
  const { screenWidth = 1440 } = useWindowSize();
  const imageSize = useMemo(() => screenWidth * 0.52, [screenWidth]);

  return (
    <Image
      {...props}
      style={{
        width: imageSize,
        height: imageSize,
      }}
    />
  );
};

const Image = styled.img`
  object-fit: cover;
  border-radius: 16px;
`;

export default SectionImage;
