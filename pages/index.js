import SearchResult from '../components/searchResult'
import GlobalStyle from '../styles/globalStyle';
import styled from "styled-components"
import { Row, Col } from 'antd';

const Container = styled.div`
    width: 100%;
    margin: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  ;
    `

export default function Home() {

  return (
    <Container>
      <GlobalStyle/>
      <SearchResult />
    </Container>
  )
}
