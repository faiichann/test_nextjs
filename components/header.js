import styled from "styled-components"
import { Row, Col,Input  } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import {setKeyword} from '../redux/search/searchAction'
import { useDispatch, useSelector } from 'react-redux';

const HeaderStyle = styled.div`
    height: 20%;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    border: solid 1px;
    `
    const Logo = styled.div`
    height: 80px;
    width: 80px;
    border: solid 1px;
    margin: 15px;
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
       <Row style={{display:'flex', justifyContent: 'space-between'}}>
      <Col span={4}  style={{justifyContent: 'start' ,display:'flex'}}><Logo/></Col>
      <Col span={14} style={{justifyContent: 'start',alignItems:'center' ,display:'flex'}}><h1>Website Name</h1></Col>
      <Col span={6} style={{justifyContent: 'flex-end' ,display:'flex',flexDirection: 'column'}}>
        <p>search</p>
        <Input placeholder="Search"  onChange={inputSearch}  prefix={<SearchOutlined style={{ color: 'blue' }}/>} />
      </Col>
    </Row>
    </HeaderStyle>
        ) 
  }
  
  export default Header