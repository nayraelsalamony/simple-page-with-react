import React from "react";
import {Navbar,Container,Nav,NavDropdown,Form,Button,FormControl} from "react-bootstrap";
import { Component } from "react";
class Header extends Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="img" src="https://www.pngitem.com/pimgs/m/367-3675869_transparent-beauty-icon-png-health-and-beauty-icon.png" alt="logo"
             style={{height:'50px' , width:'50px',borderRadius:"50%"}}/> 
             </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }} 
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        )
    }
}

export default Header;