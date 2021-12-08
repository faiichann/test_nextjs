import styled from "styled-components"
import { Row, Col,Input  } from 'antd';
import { SearchOutlined ,SmileOutlined} from '@ant-design/icons';
import {setKeyword} from '../redux/search/searchAction'
import { useDispatch, useSelector } from 'react-redux';

const HeaderStyle = styled.div`
    background: var(--Salmon-700);
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    align-items: center;
    `
const Logo = styled.div`
    height: 80px;
    width: 80px;
    border: solid 2px var(--White);
    border-radius: 10px;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--White);
    flex-direction: column;
    `
  const InputSearch = styled.input`
    border: solid 2px red;
    border-radius: 20px;
    width: 90%;
    height: 40px;
    margin: 10px;
    padding: 10px;
    color: var(--Salmon-700);
    ;
    `
  const RowHeader = styled(Row)`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `
  const ColHeader = styled(Col)`
    display: flex;
    justify-content: start;
    align-items: center;
  `

function Header() {
     const dispatch = useDispatch()
     const inputSearch = (e) => {
     const keyword = e.target.value.toLowerCase()
     console.log(keyword)
     dispatch(setKeyword(keyword))
      }

    return(
    <HeaderStyle>
       <RowHeader>
      <ColHeader span={4}  ><Logo><SmileOutlined style={{ fontSize: '25px', color: 'white' }} />Logo</Logo></ColHeader>
      <ColHeader span={14} style={{color: 'white',width: '100%'}}><h1>Find Foods 4U</h1></ColHeader>
      <ColHeader span={5} style={{justifyContent: 'flex-end',flexDirection: 'column',width: '100%'}}>
        <InputSearch placeholder="Search Restaurant Here!!"  onChange={inputSearch} />
      </ColHeader>
    </RowHeader>
    </HeaderStyle>
        ) 
  }
  
  export default Header