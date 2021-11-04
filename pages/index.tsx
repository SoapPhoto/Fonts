import type { NextPage } from 'next';
import styled from 'styled-components';
import { Grid } from '@arco-design/web-react';
import React from 'react';
import Item from '@src/components/Card/Item';

const { Row } = Grid;
const { Col } = Grid;

const Title = styled.h2`
  text-align: center;
  font-family: 'JCYuanTi';
  font-size: 42px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`;

const data = [
  {
    cnName: '霞鹜文楷',
    name: 'LXGWWenKai',
  },
  {
    cnName: '悠哉字体',
    name: 'Yozai',
  },
  {
    cnName: '江城圆体',
    name: 'JCYuanTi',
  },
];

const Home: NextPage = () => (
  <Wrapper>
    <Title>Fonts</Title>
    <Row gutter={[24, 24]}>
      {
        data.map((font) => (
          <Col span={8} key={font.name}>
            <Item
              hoverable
              family={font.name}
              name={font.cnName}
            >
              <div>文楷</div>
              两岸猿声啼不住，轻舟已过万重山。
            </Item>
          </Col>
        ))
      }
      {/* <Col span={8}>
        <Item style={{ fontFamily: 'JCYuanTi' }}>
          两岸猿声啼不住，轻舟已过万重山。
        </Item>
      </Col>
      <Col span={8}>
        <Item style={{ fontFamily: 'Yozai' }}>
          两岸猿声啼不住，轻舟已过万重山。
        </Item>
      </Col>
      <Col span={8}>
        <Item style={{ fontFamily: 'Yozai' }}>
          两岸猿声啼不住，轻舟已过万重山。
        </Item>
      </Col> */}
    </Row>
  </Wrapper>
);

export default Home;
