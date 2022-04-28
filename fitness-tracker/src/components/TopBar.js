import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Activity from './Activity';
function TopBar () {
  return (
      <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Fitness Tracker</Nav.Link>
                  <Nav.Link href="#link">Activity</Nav.Link>
                  <Button variant="outline-secondary">Log In</Button>
                  <Nav.Link href="#link">Create Account</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
  );
}

export default TopBar;