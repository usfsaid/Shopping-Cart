import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCard from "../components/ShoppingCard";

const ShoppingCardContext = createContext({});

const initialCardItems = localStorage.getItem("shopping-card")
  ? JSON.parse(localStorage.getItem("shopping-card"))
  : [];

const ShoppingCardProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardItems, setCardItems] = useState(initialCardItems);

  useEffect(() => {
    localStorage.setItem("shopping-card", JSON.stringify(cardItems));
  }, [cardItems]);

  function getItemQuantity(id) {
    return cardItems.find((item) => item.id === id)?.quantity || 0;
  }
  const increaseCardQuantity = (id) => {
    setCardItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return cardItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCardQuantity = (id) => {
    setCardItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return cardItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeItemFromCard = (id) => {
    setCardItems((currItems) => currItems.filter((item) => item.id !== id));
  };
  const openCard = () => {
    setIsOpen(true);
  };
  const closeCard = () => {
    setIsOpen(false);
  };
  return (
    <ShoppingCardContext.Provider
      value={{
        cardItems,
        getItemQuantity,
        increaseCardQuantity,
        decreaseCardQuantity,
        removeItemFromCard,
        openCard,
        closeCard,
      }}
    >
      {children}
      <ShoppingCard isOpen={isOpen} />
    </ShoppingCardContext.Provider>
  );
};

export default ShoppingCardProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCard = () => {
  return useContext(ShoppingCardContext);
};
