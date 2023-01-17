import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  //const totalAmount = `${cartCtx.totalAmount.toFixed(3)} Ft`;
  const test = cartCtx.totalAmount.toLocaleString("hu-HU", {style:"currency", currency:"HUF", maximumFractionDigits: 0})
  console.log(test)
  //const totalAmount = `${cartCtx.totalAmount} Ft`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };

  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id)
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
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>{test}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
