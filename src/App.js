import { Fragment } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Product";

function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Products></Products>
      </main>
    </Fragment>
  );
}

export default App;
