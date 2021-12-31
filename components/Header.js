import styled from "styled-components"
import Link from "next/link"

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo/>
        <Navigation>
          <Link href='/'>
          <a>
          <Nav>Home</Nav>
          </a>
          </Link>

          <Link  href='/about'>
          <a>
          <Nav>About </Nav>
          </a>
          </Link>
          
         <Link  href='/'>
         <a> 
           <Nav>Service</Nav>
           </a>
         </Link>

         <Link  href='/'>
         <a> 
           <Nav>Contact</Nav>
           </a>
         </Link>
        </Navigation>

      </Wrapper>
    </Container>
  )
}

export default Header

const Nav = styled.div`
color: white;
font-weight: bold;
cursor: pointer;



:hover{
  cursor: pointer;
  background-color:grey;
  color: white;
  
}
`

const Navigation = styled.div`
  width: 500px;
  display: flex;
  height: 60px;
 
  display: flex;
justify-content: space-around;
align-items: center;
`

const Logo = styled.img`
width: 100px;
height: 50px;

margin-right: 300px;
margin-top: 5px;
margin-left: 10px;
`

const Container= styled.div`
width: 100%;
`

const Wrapper = styled.div`
height: 60px;
width: 100%;
background-color: green;
display: flex;
justify-content: space-around;
`


