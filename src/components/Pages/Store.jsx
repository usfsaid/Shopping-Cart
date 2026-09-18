import { Col, Row } from "react-bootstrap";
import storeItems from "../../data/storeItems.json";
import StoreItem from "../Helper/StoreItem.jsx";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-5">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
