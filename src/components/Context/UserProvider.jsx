import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  // Add items to the cart, allowing duplicates
  const AddToCart = (item) => {
    setItemsInCart((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (existingItemIndex > -1) {
        // Item exists in the cart, increment its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // Item doesn't exist, add it with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove a specific quantity of an item from the cart
  const removeFromCart = (itemId, quantityToRemove) => {
    setItemsInCart((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === itemId) {
            // Reduce the quantity of the item, but ensure it doesn't go below 0
            const updatedQuantity = Math.max(item.quantity - quantityToRemove, 0);
            return { ...item, quantity: updatedQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Filter out items with quantity 0
    });
  };

  // Increment item quantity in the cart
  const IncrementClick = (itemId) => {
    setItemsInCart((prevItems) => {
      return prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  // Decrement item quantity in the cart
  const DecrementClick = (itemId) => {
    setItemsInCart((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0); // Filter out items with quantity 0
    });
  };

  const value = {
    itemsInCart,
    AddToCart,
    IncrementClick,
    DecrementClick,
    removeFromCart,
  };

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
