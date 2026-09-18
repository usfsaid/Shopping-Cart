import { Button, Card } from "react-bootstrap";
import formatCurrency from "./formatCurrency";
import { useShoppingCard } from "../../context/ShoppingCardContext";

const StoreItem = ({ id, imgUrl, name, price }) => {
  const {
    getItemQuantity,
    increaseCardQuantity,
    decreaseCardQuantity,
    removeItemFromCard,
  } = useShoppingCard();
  const quantity = getItemQuantity(id);

  return (
    <>
      <Card className="h-100">
        <Card.Img
          src={imgUrl}
          variant="top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto ">
            {quantity === 0 ? (
              <Button
                className="btn w-100"
                onClick={() => increaseCardQuantity(id)}
              >
                {" "}
                Add To Card
              </Button>
            ) : (
              <div className="d-flex align-items-center flex-column gap-3">
                <div className="d-flex gap-3 justify-content-center align-items-center ">
                  <Button onClick={() => decreaseCardQuantity(id)}>-</Button>
                  <span className="fs-3">{quantity} in card</span>
                  <Button onClick={() => increaseCardQuantity(id)}>+</Button>
                </div>

                <Button
                  onClick={() => removeItemFromCard(id)}
                  className="bg-danger"
                  style={{ outline: "none", border: "none" }}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StoreItem;
