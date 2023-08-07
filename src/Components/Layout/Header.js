import { Fragment } from "react";
import classes from "./Header.module.css";
import bannerimg from "../../Assets/food-banner.jpg";
import ButtonCart from "./ButtonCart";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <ButtonCart onClick={props.onshow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={bannerimg} alt="a animated food table"></img>
      </div>
    </Fragment>
  );
};
export default Header;
