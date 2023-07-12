import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const OrderItems = (
    <ul>
      {[{ name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={1}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onclose}>
      {OrderItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onclose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
