import type { NextPage } from 'next';
import styled from 'styled-components';
import { Grid, Radio } from '@arco-design/web-react';
import React, { useState } from 'react';
import Item from '@src/components/Card/Item';

const RadioGroup = Radio.Group;
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
  return (
    <Wrapper>
      <Title>Fonts</Title>
      <RadioGroup
        options={options}
        size="large"
        type="button"
        value={weight}
        onChange={setWeight}
        style={{ marginBottom: 20 }}
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
