import React,{useState} from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items,setItems]=useState([])
 const additemhandler = (item) => {
   setItems([...items,item])
    
 };
const  removeItemhandler = (id) => {};
  const cartcontext = {
    items: items,
    totalamount:0 ,
    addItem: additemhandler,
    removeItem: removeItemhandler,
  };
  

  return <CartContext.Provider value={cartcontext}>
    {console.log('inside cartprivider',cartcontext.items)}{props.children}</CartContext.Provider>;
};

export default CartProvider;
