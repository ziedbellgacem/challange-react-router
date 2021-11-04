
import {FormControl,Nav,Navbar,Container,Form,Button} from "react-bootstrap"
import {Link} from "react-router-dom"







function NavBar({getSearch}){
    return (
        <Navbar bg="light" expand="lg">
        <Container >
          
            <Nav className="me-auto" >
              <Nav.Link as={Link} to='/' >Home</Nav.Link>
              <Nav.Link as={Link} to='/OurTours'>Our Tour</Nav.Link>
              <Nav.Link  as={Link} to='/AddNewTour'>Add New Tour</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => getSearch(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          
        </Container>
      </Navbar>

    )
}
export default NavBar;