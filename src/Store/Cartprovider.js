import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const additemhandler = (item) => {
    console.log(item);
    const existingCartItemIndex = items.findIndex(
      (index) => index.id === item.id
    );
    const existingcartitem = items[existingCartItemIndex];
    let updatedItems;
    if (existingcartitem) {
      const updatedItem = {
        ...existingcartitem,
        quantity: +existingcartitem.quantity + +item.quantity,
      };
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
      setItems(updatedItems);
    } else {
      setItems([...items, item]);
    }
  };
  const removeItemhandler = (id) => {
    console.log(id);
    const existingCartItemIndex = items.findIndex((index) => index.id === id);
    const existingcartitem = items[existingCartItemIndex];
    console.log(existingcartitem);
    let updatedItems;
    if (existingcartitem.quantity === 1 || existingcartitem.quantity === "1") {
      updatedItems = items.filter((item) => item.id !== id);
      console.log(updatedItems);
      setItems(updatedItems);
    } else {
      const updatedItem = {
        ...existingcartitem,
        quantity: +existingcartitem.quantity - 1,
      };
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
      setItems(updatedItems);
    }
  };
  const cartcontext = {
    items: items,
    totalamount: 0,
    addItem: additemhandler,
    removeItem: removeItemhandler,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {console.log("inside cartprivider", cartcontext.items)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
