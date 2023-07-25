import { Fragment, useContext, useEffect, useState } from "react";
import CartContext from "../Store/cart-context";
import CartItem from "../Components/Cart/CartItem";
import classes from "./Kosar.module.css";
import Card from "../Components/UI/Card";
import OrderSummary from "../Components/Order/OrderSummary";
import EmptyCart from "../Components/Order/EmptyCart";
import StepProgressBar from "../Components/Order/StepProgressBar";

function Kosar() {
  const cartCtx = useContext(CartContext);

  cartCtx.setNextPage("/delivery-method");

  // ORDER STATUS BAR
  cartCtx.orderStatus.cart = true;
  cartCtx.orderStatus.order = false;
  cartCtx.orderStatus.data = false;
  cartCtx.orderStatus.confirmation = false;

  const { items } = cartCtx;
  const [cartIsEmpty, setCartIsEmpty] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      setCartIsEmpty(false);
    }
    if (items.length > 0) {
      setCartIsEmpty(true);
    }
  }, [items]);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          image={item.image}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartRemoveHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Fragment>
      {!cartCtx.isCartEmpty && (
        <div>
          <div className={classes.progressBar}>
            <StepProgressBar></StepProgressBar>
          </div>
          <section className={classes.products}>
            <section className={classes.items}>
              <Card>{cartItems}</Card>
            </section>
            <section className={classes.amount}>
              <OrderSummary nextPage={cartCtx.nextPage}></OrderSummary>
            </section>
          </section>
        </div>
      )}
      {cartCtx.isCartEmpty && <EmptyCart></EmptyCart>}
    </Fragment>
  );
}

export default Kosar;
