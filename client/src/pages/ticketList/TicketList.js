import { Container, Row, Col, Button } from 'react-bootstrap';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import SearchForm from '../../components/searchForm/SearchForm';
import { useEffect, useState } from 'react';
import TicketTable from '../../components/ticketTable/Table';
import tickets from '../../assets/data/dummyTickets.json';

export default function TicketList() {
  const [str, setStr] = useState('');

  const [displayTicket, setDisplayTicket] = useState(tickets);

  useEffect(() => {}, [str, displayTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;

    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sttr) => {
    const displayTickts = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

    setDisplayTicket(displayTickts);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="New Ticket" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Button variant="info">Add new ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />

      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  );
}
