import { useContext } from "react";
import CartIcon from "../Cart/Carticon";
import classes from "./Buttoncart.module.css";
import CartContext from "../../Store/cart-context";
const ButtonCart = (props) => {
  const cartctx = useContext(CartContext);
  const numberofCartItems = cartctx.items.length;
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};
export default ButtonCart;
