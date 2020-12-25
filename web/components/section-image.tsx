import React, { useMemo } from 'react';
import styled from '@emotion/styled';

import useWindowSize from '../utils/useWindowSize';

interface ISectionImage {
  rectangle?: boolean;
}

const SectionImage: React.FC<
  ISectionImage & React.ImgHTMLAttributes<HTMLImageElement>
> = ({ rectangle = true, ...props }) => {
  const { screenWidth = 1440 } = useWindowSize();
  const imageSize = useMemo(() => screenWidth * 0.52 + 200, [screenWidth]);

  return (
    <Image
      {...props}
      style={{
        width: imageSize,
        height: rectangle ? imageSize : 'auto',
      }}
    />
  );
};

const Image = styled.img`
  object-fit: cover;
  border-radius: 16px;
  user-select: none;
  -webkit-user-drag: none;
`;

export default SectionImage;
