import { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
const App = () => {
  return (
    <Fragment>
      <Header />
      <main style={{backgroundColor:"#383838"}}>
        <Meals/>
      </main>
    </Fragment>
  );
};

export default App;
