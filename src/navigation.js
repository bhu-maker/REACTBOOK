import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Container,Navbar,Nav} from 'react-bootstrap';
export const Navigation=()=>{
    return(
        
        <>
  <Navbar bg="primary" variant="dark" className="text-dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="/gett">Home</Nav.Link>
      <Nav.Link href="/postt">Agreement</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
        </>
    )
}