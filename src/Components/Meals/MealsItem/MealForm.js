import React, { useContext } from "react";
import classes from "./MealForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../Store/cart-context";
const MealForm = (props) => {
  const cartctx = useContext(CartContext);

  const addtoCartHandler = (event) => {
    event.preventDefault();
    cartctx.addItem(props.item);
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addtoCartHandler}>+ Add</button>
    </form>
  );
};
export default MealForm;
