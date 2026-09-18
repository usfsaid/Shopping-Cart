import { Button, Stack } from "react-bootstrap";
import storeItem from "../data/storeItems.json";
import formatCurrency from "./Helper/formatCurrency";
import { useShoppingCard } from "../context/ShoppingCardContext";

const CartItem = ({ id, quantity }) => {
  const { removeItemFromCard } = useShoppingCard();
  const item = storeItem.find((i) => i.id === id);
  if (item === null) return null;
  return (
    <>
      <Stack
        direction="horizantal"
        className="d-flex gap-3 "
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <img
          src={item.imgUrl}
          alt=""
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto ">
          <div>
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
          </div>
          <div>{formatCurrency(quantity * item.price)}</div>
        </div>
        <Button
          variant="outline-danger"
          size="sm"
          style={{ height: "max-content" }}
          onClick={() => removeItemFromCard(item.id)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
};

export default CartItem;
