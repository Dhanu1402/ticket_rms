import { Col, Container, Row } from 'react-bootstrap';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import AddTicketForm from '../../components/addTicketForm/AddTicketForm';
import { useEffect, useState } from 'react';
import { shortText } from '../../utils/validation';

const initialFormData = { subject: '', issueDate: '', details: '' };

const initialFormError = {
  subject: 'false',
  issueDate: 'false',
  details: 'false',
};

export default function AddTicket() {
  const [formData, setFormData] = useState(initialFormData);

  const [formDataError, setFormDataError] = useState(initialFormError);

  useEffect(() => {}, [formData, formDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...initialFormData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormDataError(initialFormError);

    const isSubjectValid = await shortText(formData.subject);

    setFormDataError({ ...initialFormError, subject: !isSubjectValid });
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            formData={formData}
            handleOnSubmit={handleOnSubmit}
            formDataError={formDataError}
          />
        </Col>
      </Row>
    </Container>
  );
}
