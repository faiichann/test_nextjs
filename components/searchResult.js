import React from 'react';
import data from '../data.json'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import { Row, Col, Descriptions } from 'antd';
import { Image , Card, Avatar} from 'antd';

const CardResult = styled(Card)`
    background-color: var(--Salmon-200);
    width: 90%;
    padding: 20px;
    margin: 5px;
    border-radius: 30px;
    box-shadow: 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover{
        border: solid 2px var(--Salmon-700);
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const CardRow = styled(Row)`
    width: 100%;
    display: flex;

`
const ImageLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    border: solid 2px #ffcccc;
    border-radius: 20px;
    color: #ffcccc;
    width: 70px;
    height: 70px;
`
const Description = styled.span`
    color: slategrey;
    width: 60%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  
    font-size: 12px;
    margin: 0;
    resize: horizontal;
`
const Name = styled.p`
    color: var(--Salmon-700);
    font-size: 18px;
    font-weight: 700;
    margin: 0;
`
const Title = styled.span`
    color: gray;
    font-size: 14px;
    font-weight: 400;
`
const DivDescription = styled.div`
    display: flex;
`
const SearchResult = () => {
const searchKeyword = useSelector(state => state.search.keyword) 
  console.log(searchKeyword)
    console.log(data)

    const searchFilter = (t) => 
        t.description.toLowerCase().includes(searchKeyword) || 
        t.title.toLowerCase().includes(searchKeyword) ||
        t.name.toLowerCase().includes(searchKeyword)
        
    return (
        <>
            {data
                ? data.filter(searchFilter).map((item, index) => {
                      return (
                          <>
                         <Container  key={index}>
                         <CardResult>
                             <CardRow>
                                 <Col span={4}>
                                 <ImageLogo>image</ImageLogo>
                                 </Col>
                                 <Col span={20}>
                                     <Name>{item.name}</Name>
                                     <Title>{item.title}</Title>
                                     <DivDescription>
                                         <Description>{item.description}</Description>
                                     </DivDescription>
                                 </Col>
                             </CardRow>
                        </CardResult>
                         </Container >
                         </>
                      )
                  })
                :null }
        </>
    );
};
export default SearchResult;