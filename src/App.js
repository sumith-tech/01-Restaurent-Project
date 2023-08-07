import React,{useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/Cartprovider";
const App = () => {
  const [showCart, setShowcart] = useState(false);
  const showCartHandler = () => {
    setShowcart(true);
  };
  const closeCartHandler = () => {
    setShowcart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onclose={closeCartHandler} />}
      <Header onshow={showCartHandler} />
      <main style={{ backgroundColor: "#383838" }}>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
