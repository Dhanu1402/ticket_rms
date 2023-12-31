import { Button, Col, Container, Row } from 'react-bootstrap';
import TicketTable from '../../components/ticketTable/Table';
import tickets from '../../assets/data/dummyTickets.json';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';

export default function Dashboard() {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Dashboard" />
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: '2rem', padding: '10px 30px' }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-2">Recently added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
}
