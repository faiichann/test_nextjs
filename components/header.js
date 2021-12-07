import styled from "styled-components"
import { Row, Col,Input  } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import {useState ,useEffect} from 'react'
import {setKeyword} from '../redux/actions/search'
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
     const [searchValue, setSearchValue] = useState('');

     const dispatch = useDispatch()
    //  useEffect(() => {
    //     dispatch(getTodoLists())
    // }, [dispatch])

    //  useEffect(() => {
    //      const delayTime = setTimeout(() => {
    //          async function realTime() {
    //              if (!searchValue) {
    //                  console.log('not have')
    //                 //  const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20Sydney&key=YOUR_API_KEY')
    //                 // const data = await response.json()
    //              } else if (searchValue) {
    //                 console.log('have')
    //                 //  const response = await ApiPostSearch(searchValue, contentData);
    //                 //  const data = await response.json()
    //              }
    //          }
    //          realTime();
    //      }, 500);
 
    //      return () => clearTimeout(delayTime);
    //  }, [searchValue]);
    return(
    <HeaderStyle>
       <Row style={{display:'flex', justifyContent: 'space-between'}}>
      <Col span={4}  style={{justifyContent: 'start' ,display:'flex'}}><Logo/></Col>
      <Col span={14} style={{justifyContent: 'start',alignItems:'center' ,display:'flex'}}><h1>Website Name</h1></Col>
      <Col span={6} style={{justifyContent: 'flex-end' ,display:'flex',flexDirection: 'column'}}>
        <p>search</p>
        <Input placeholder="Search"  onChange={(e) =>  dispatch(setKeyword(e.target.value))}  prefix={<SearchOutlined style={{ color: 'blue' }}/>} />
      </Col>
    </Row>
    </HeaderStyle>
        ) 
  }
  
  export default Header