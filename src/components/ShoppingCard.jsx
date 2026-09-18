import { Offcanvas } from "react-bootstrap";
import { useShoppingCard } from "../context/ShoppingCardContext";
import CartItem from "./CartItem";
import formatCurrency from "./Helper/formatCurrency";
import storeItems from "../data/storeItems.json";

const ShoppingCard = ({ isOpen }) => {
  const { cardItems, closeCard } = useShoppingCard();

  return (
    <Offcanvas show={isOpen} onHide={closeCard} placement="end">
      <Offcanvas.Header closeButton onClick={closeCard}>
        <Offcanvas.Title>Card</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="d-flex flex-column gap-3">
          {cardItems.map((item) => (
            <CartItem key={item.id} {...item} style={{ marginBottom: "5px" }} />
          ))}
        </div>

        <div className="ms-auto fw-bold fs-5 mt-4">
          Total{" "}
          {formatCurrency(
            cardItems.reduce((total, cardItem) => {
              const item = storeItems.find((i) => i.id === cardItem.id);
              return total + (item?.price || 0) * cardItem.quantity;
            }, 0),
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCard;
