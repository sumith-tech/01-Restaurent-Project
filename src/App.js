import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const [showCart, setShowcart] = useState(false);

  const showCartHandler = () => {
    setShowcart(true);
  };
  const closeCartHandler = () => {
    setShowcart(false);
  };

  return (
    <Fragment>
      {showCart && <Cart onclose={closeCartHandler}/>}
      <Header onshow={showCartHandler} />
      <main style={{ backgroundColor: "#383838" }}>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
