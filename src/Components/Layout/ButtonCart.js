import CartIcon from "../Cart/Carticon";
import classes from "./Buttoncart.module.css";
const ButtonCart = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
export default ButtonCart;
