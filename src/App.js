import { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

const App = () => {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <main style={{ backgroundColor: "#383838" }}>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
