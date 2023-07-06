import { Fragment } from "react";
import CartContext from "../Store/cart-context";
import classes from "./Order.module.css";
import { useEffect, useContext } from "react";
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

  return (
    <Fragment>
      {" "}
      <div className={classes.progressBar}>
        <StepProgressBar></StepProgressBar>
      </div>
      <h1>Order</h1>
    </Fragment>
  );
};

export default Order;
