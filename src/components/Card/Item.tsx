import { Card, CardProps } from '@arco-design/web-react';
import React from 'react';
import styled from 'styled-components';

interface IProps extends CardProps {
  family: string;
  name: string;
}

const Wrapper = styled(Card)`
  transition-property: all;
  &:hover {
    transform: translateY(-4px);
  }
`;

const FontName = styled.div`
  font-size: 16px;
  font-family: JCYuanTi;
  font-weight: 500;
  color: #000;
`;

const FontDes = styled.div`
  font-size: 12px;
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Content = styled.div`
  font-size: 32px;
  min-height: 142px;
`;

const Url = styled.div`
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 112px;
    height: 100%;
    right: 0;
    pointer-events: none;
    background: -webkit-linear-gradient(178.76deg,#fff,hsla(0,0%,100%,0));
    background: linear-gradient(271.24deg,#fff,hsla(0,0%,100%,0));
  }
`;

const Item: React.FC<IProps> = ({ family, name }) => (
  <Wrapper hoverable>
    <Header>
      <FontName>{name}</FontName>
      <FontDes>{family}</FontDes>
    </Header>
    <Content style={{ fontFamily: family }}>
      两岸猿声啼不住，轻舟已过万重山。
    </Content>
    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
    <Url>{`//cdn-oss.soapphoto.com/fonts/${family}.cf3df82d-25cb-48a0-9a35-0b13c8eb4151.css`}</Url>
  </Wrapper>
);

export default Item;