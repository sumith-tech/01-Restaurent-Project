import React from "react";

const CartContext =React.createContext({
  items: [],
  totalamount: 1,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;