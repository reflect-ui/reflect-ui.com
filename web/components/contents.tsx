import React from 'react';
import styled from '@emotion/styled';

interface IContents {
  style?: React.CSSProperties;
}

const exampleContents = ['Button', 'Why Reflect?', 'Contents Title', 'Item'];

const Contents: React.FC<IContents> = ({ style }) => {
  return (
    <ContentsWrapper style={style}>
      <ContentTitle>CONTENT</ContentTitle>
      <ContentListWrapper>
        <ProgressWrapper>
          <ProgressBar />
        </ProgressWrapper>
        <ContentList>
          {exampleContents.map((content) => (
            <ContentItem key={content}>{content}</ContentItem>
          ))}
        </ContentList>
      </ContentListWrapper>
    </ContentsWrapper>
  );
};

export default Contents;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100vh;
  padding-top: 48px;
  position: fixed;
  right: 0;
`;

const ContentTitle = styled.h6`
  font-weight: bold;
  font-size: 16px;
  line-height: 1.2;
  color: #ffffff;
  margin: 0;
`;

const ContentListWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProgressWrapper = styled.div`
  position: relative;
  width: 1px;
  height: 128px;
  background-color: #4f4f4f;
  margin-left: 8px;
`;

const ProgressBar = styled.div`
  height: 32px;
  width: 1px;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const ContentList = styled.ul`
  margin-top: 16px;
  padding: 0;
  list-style-type: none;
  margin-left: 16px;
`;

const ContentItem = styled.li`
  font-size: 14px;
  line-height: 1.2;
  color: #828282;
  height: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
