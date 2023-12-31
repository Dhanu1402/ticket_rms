import { Button, Col, Container, Row } from 'react-bootstrap';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import tickets from '../../assets/data/dummyTickets.json';
import MessageHistory from '../../components/messageHistory/MessageHistory';
import { useState, useEffect } from 'react';
import { UpdateTicket } from '../../components/updateTicket/UpdateTicket';

const ticket = tickets[0];

export default function Ticket() {
  const [message, setMessage] = useState('');

  useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert('Form submited!');
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Ticket" />
        </Col>
      </Row>

      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Ticket opened: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr />

      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
}
