import React    from 'react';
import{Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';



class Navrbar extends React.Component {

  render() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Your Music</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default Navrbar;