import MealForm from "./MealForm";
import classes from "./MealsItem.module.css";
const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
    <MealForm id={props.id}  item={props}/>
      </div>
    </li>
  );
};

export default MealsItem;
