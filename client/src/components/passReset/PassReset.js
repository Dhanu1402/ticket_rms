import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function PassReset({
  handleOnChange,
  email,
  handleOnResetSubmit,
  formSwitcher,
}) {
  return (
    <Container className="bg-white">
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                value={email}
                placeholder="Enter email"
              />
            </Form.Group>

            <Button type="submit">Reset</Button>
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher('login')}>
            Login now
          </a>
        </Col>
      </Row>
    </Container>
  );
}
