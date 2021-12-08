import styled from "styled-components"
import { Row, Col,Input  } from 'antd';
import { BarsOutlined ,DownloadOutlined ,HomeOutlined } from '@ant-design/icons';
import { useMemo, memo } from 'react';

 const RowHeader = styled(Row)`
    width: 100%;
    height: 8%;
    top: 0;
    display: flex;
    align-items: center;
    background-color: var(--White);
`;

 const TextHeader = styled.div`
    width: 100%;
    height: 36px;
    color: var(--Gray-400);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

 const BackHeader = styled.div`
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow:  0 3px 6px #e0e0e0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
 const LeftDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
    align-items: center;
    cursor: pointer;
`;
 const RightDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    align-items: center;
    cursor: pointer;
    `

// eslint-disable-next-line react/display-name
const Header = memo(( title, right, left ) => {

  const leftCon = useMemo(() => {
      if (left === 'back') {
          return (
              <HomeOutlined style={{ color: '#8a8888' }} />
          )
      } else {
          return left;
      }
  }, [left])

  const rightCon = useMemo(() => {
      if (right === 'menu') {
          return (
              <>
                  <BarsOutlined />
              </>
          )
      } else if (right === 'save') {
          return (
              <>
                  <DownloadOutlined style={{ color: '#8a8888', fontSize: '24px' }} />
              </>
          )
      } else {
          return right;
      }
  }, [right])

  return (
      <>
          <RowHeader justify="space-between">
              <Col span={4}>
                  <LeftDiv>{leftCon}</LeftDiv>
              </Col>
              <Col span={16}>
                  <TextHeader>{title}</TextHeader>
              </Col>
              <Col span={4}>
                  <RightDiv>{rightCon}</RightDiv>
              </Col>
          </RowHeader>
      </>
  )
})

export default Header