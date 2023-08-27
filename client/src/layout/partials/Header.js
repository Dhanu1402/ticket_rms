import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar collapseOnSelect variant="dark" bg="info" expand="md">
      <Navbar.Brand href="/">Ticket Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/tickets">Tickets</Nav.Link>
          <Nav.Link>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
