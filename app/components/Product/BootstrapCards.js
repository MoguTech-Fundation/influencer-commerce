import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { USDollar } from "./ProductThumb";

function BootstrapCards({ products }) {
  return (
    <Row xs={1} md={4} className="g-4">
      {products.map((p, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={p.picture} />
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>{USDollar.format(p.selling_price)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default BootstrapCards;
