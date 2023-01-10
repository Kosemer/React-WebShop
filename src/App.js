import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Product";
import CartProvider from "./Store/CartProvider";

function App() {

const [visibleCart, setVisibleCart] = useState(false);

const showCartHandler = () => {
  setVisibleCart(true)
}

const hideCartHandler = () => {
  setVisibleCart(false)
}

  return (
    <CartProvider>
      {visibleCart && <Cart hideCartHandler={hideCartHandler}></Cart>}
      <Header showCartHandler={showCartHandler}></Header>
      <main>
        <Products></Products>
      </main>
    </CartProvider>
  );
}

export default App;
