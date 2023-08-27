import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function BreadCrumb({ page }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
