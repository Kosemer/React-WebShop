import { Fragment, useEffect, useContext } from "react";
import CartContext from "../Store/cart-context";
import classes from "./Order.module.css";
import { useState } from "react";
import StepProgressBar from "../Components/Order/StepProgressBar";
import { NavLink, useNavigate } from "react-router-dom";

const Order = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartCtx = useContext(CartContext);

  cartCtx.orderStatus.cart = false;
  cartCtx.orderStatus.order = false;
  cartCtx.orderStatus.data = false;
  cartCtx.orderStatus.confirmation = false;

  console.log(cartCtx.orderId);

  return (
    <Fragment>
      <div className={classes.progressBar}>
        <StepProgressBar></StepProgressBar>
      </div>
      <h1 className={classes.thankYou}>Köszönjük, hogy minket választottál!</h1>
      <p className={classes.text}>Rendelésed azonoísótja: <strong>{cartCtx.orderId}</strong></p>
      <p className={classes.text}>
      Rendelésed feldolgozása megkezdődött, e-mail-ben elküldtük a részleteket.
      </p>
      <p className={classes.text}>Vissza a <NavLink to="/">főoldalra</NavLink>.</p>
      
    </Fragment>
  );
};

export default Order;
