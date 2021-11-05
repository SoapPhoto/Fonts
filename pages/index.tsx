import type { NextPage } from 'next';
import styled from 'styled-components';
import { Grid, Radio, Slider } from '@arco-design/web-react';
import React, { useState } from 'react';
import Item from '@src/components/Card/Item';

const RadioGroup = Radio.Group;
const { Row } = Grid;
const { Col } = Grid;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
  font-family: 'JCYuanTi';
  font-size: 62px;
  position: relative;
  font-weight: 700;
  &::before {
    content: 'FONTS';
    bottom: -4px;
    left: 50%;
    width: 400px;
    transform: translate(-200px);
    position: absolute;
    text-align: center;
    font-family: 'JCYuanTi';
    font-size: 44px;
    font-weight: 700;
    color: rgba(0, 0, 0, .1);
    margin: 0;
    padding:0;
  }
`;

const BG = styled.div`
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
  {
    cnName: 'OPPO Sans',
    name: 'OPPOSans',
  },
];

const options = [{
  value: 400,
  label: 'Regular',
}, {
  value: 700,
  label: 'Bold',

}];

const Home: NextPage = () => {
  const [weight, setWeight] = useState(400);
  const [size, setSize] = useState<number>(32);
  return (
    <Wrapper>
      {/* <BG>Fonts</BG> */}
      <Title>字体</Title>
      <RadioGroup
        options={options}
        size="large"
        type="button"
        value={weight}
        onChange={setWeight}
        style={{ marginBottom: 20 }}
      />
      <Slider
        value={size}
        onChange={(value) => setSize(value as number)}
        min={12}
        max={42}
        marks={{
          12: '12',
          22: '22',
          32: '32',
          42: '42',
        }}
        showTicks
        style={{ marginLeft: 12, width: 220 }}
      />
      <Row gutter={[24, 24]}>
        {
          data.map((font) => (
            <Col span={8} key={font.name}>
              <Item
                hoverable
                family={font.name}
                name={font.cnName}
                weight={weight}
                fontSize={size}
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
};

export default Home;
