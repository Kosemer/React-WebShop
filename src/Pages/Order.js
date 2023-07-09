import { Fragment, useEffect, useContext } from "react";
import CartContext from "../Store/cart-context";
import classes from "./Order.module.css";
import { useState } from "react";
import StepProgressBar from "../Components/Order/StepProgressBar";

const Order = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartCtx = useContext(CartContext);

  cartCtx.orderStatus.cart = false;
  cartCtx.orderStatus.order = false;
  cartCtx.orderStatus.data = false;
  cartCtx.orderStatus.confirmation = false;

  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const generateOrderId = () => {
      // Az azonosító generálása
      const existingIds =
        cartCtx.orders.length > 0
          ? cartCtx.orders.map((order) => order.id)
          : [1000];
      let newId = Math.max(...existingIds) + 1;
      while (existingIds.includes(newId)) {
        newId++;
      }
      setOrderId(newId.toString());
    };

    generateOrderId();
  }, [cartCtx.orders]);

  return (
    <Fragment>
      <div className={classes.progressBar}>
        <StepProgressBar></StepProgressBar>
      </div>
      <h1>Köszönjük, hogy minket választottál!</h1>
      <p className={classes.text}>
        E-mail-ben elküldtük a rendelésed részleteit
      </p>
      <p className={classes.text}>
        A <strong>{orderId}</strong> számú rendelésed feldolgozása megkezdődött.
      </p>
    </Fragment>
  );
};

export default Order;
