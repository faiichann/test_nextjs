import styled from "styled-components"

const FooterStyle = styled.div`
  background: #ff7b73;
  color: white;
  height: 50px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  border: solid 1px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  box-shadow: 8px 0px 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
function Footer() {
    return (
    <FooterStyle>Create by faiichannn</FooterStyle>
    )
  }
  
  export default Footer