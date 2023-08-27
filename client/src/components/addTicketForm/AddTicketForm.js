import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './form.style.css';

export default function AddTicketForm({
  handleOnSubmit,
  handleOnChange,
  formData,
  formDataError,
}) {
  return (
    <Container className="add-new-ticket" mt-3 bg-light>
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />

      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={formData.subject}
              // minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />

            <Form.Text className="text-danger">
              {formDataError.subject && 'Subject is required!'}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            value={formData.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Login
        </Button>
      </Form>
    </Container>
  );
}
