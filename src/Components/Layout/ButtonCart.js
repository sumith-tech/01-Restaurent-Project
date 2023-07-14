import { useContext } from "react";
import CartIcon from "../Cart/Carticon";
import classes from "./Buttoncart.module.css";
import CartContext from "../../Store/cart-context";
const ButtonCart = (props) => {
  const cartctx = useContext(CartContext);
  let numberofCartItems = 0;
  cartctx.items.forEach((item) => {
    numberofCartItems = numberofCartItems + Number(item.quantity);
  });

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
