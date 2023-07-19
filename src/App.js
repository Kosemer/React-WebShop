import { useState, useContext } from "react";
import { Route, Routes, useMatch, useLocation  } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Memoriak from "./Pages/Memoriak";
import Merevlemezek from "./Pages/Merevlemezek";
import Processzorok from "./Pages/Processzorok";
import Videokartyak from "./Pages/Videokartyak";
import Alaplapok from "./Pages/Alaplapok";
import CartProvider from "./Store/CartProvider";
import Kosar from "./Pages/Kosar";
import ProductDetail from "./Pages/ProductDetail";
import DeliveryMethod from "./Pages/DeliveryMethod";
import DeliveryDetails from "./Pages/DeliveryDetails";
import LoginForm from "./Pages/LoginForm";
import SearchBar from "./Components/Layout/SearchBar";
import Home from "./Pages/Home";
import Slider from "./Components/UI/Slider/Slider";
import CartContext from "./Store/cart-context";
import Footer from "./Components/Layout/Footer";
import Order from "./Pages/Order";

function App() {
  const cartCtx = useContext(CartContext);

  const [visibleCart, setVisibleCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const showCartHandler = () => {
    setVisibleCart(true);
  };

  const hideCartHandler = () => {
    setVisibleCart(false);
  };

  /* const router = createBrowserRouter([
    {path: "/", element: <Alaplapok></Alaplapok>},  // Itt lesz a HOME
    {path: "login", element: <LoginForm></LoginForm>},
    {path: "alaplapok", element: <Alaplapok></Alaplapok>},
    {path: "memoriak", element: <Memoriak></Memoriak>},
    {path: "merevlemezek", element: <Merevlemezek></Merevlemezek>},
    {path: "processzorok", element: <Processzorok></Processzorok>},
    {path: "videokartyak", element: <Videokartyak></Videokartyak>},
    {path: "kosar", element: <Kosar></Kosar>},
    {path: "product-detail/:productId", element: <ProductDetail></ProductDetail>},
    {path: "delivery-method", element: <DeliveryMethod></DeliveryMethod>},
    {path: "delivery-details", element: <DeliveryDetails></DeliveryDetails>},
  ])*/

  // A useMatch hook segítségével lekérem az aktuális oldal elérési útját
  const match = useMatch("/:page/:productId");

  // Az aktuális oldal elérési útjából kiolvasom az oldal nevét
  const currentPage = match?.params?.page || "Home";

  const location = useLocation();

    // Az aktuális oldal elérési útját kiolvassuk az URL-ből
    const currentPage2 = location.pathname.split("/")[1] || "Home";

    // Ellenőrizzük, hogy az aktuális oldal a login oldal-e
    const isLoginForm = currentPage2 === "login";


  return (
    <CartProvider>
      {visibleCart && <Cart hideCartHandler={hideCartHandler}></Cart>}
      {!isLoginForm  && <Header showCartHandler={showCartHandler}></Header>}
      {/*<Slider></Slider>*/}
      {/*<RouterProvider router={router}></RouterProvider>*/}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>}></Route>
        <Route path="alaplapok" element={<Alaplapok></Alaplapok>}></Route>
        <Route path="memoriak" element={<Memoriak></Memoriak>}></Route>
        <Route
          path="merevlemezek"
          element={<Merevlemezek></Merevlemezek>}
        ></Route>
        <Route
          path="processzorok"
          element={<Processzorok></Processzorok>}
        ></Route>
        <Route
          path="videokartyak"
          element={<Videokartyak></Videokartyak>}
        ></Route>
        <Route path="kosar" element={<Kosar></Kosar>}></Route>
        <Route
          path={`/${currentPage}/:productId`}
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route
          path="delivery-method"
          element={<DeliveryMethod></DeliveryMethod>}
        ></Route>
        <Route
          path="delivery-details"
          element={<DeliveryDetails></DeliveryDetails>}
        ></Route>
        <Route path="rendeles" element={<Order></Order>}></Route>
      </Routes>
      <main></main>
      <Footer></Footer>
    </CartProvider>
  );
}

export default App;
