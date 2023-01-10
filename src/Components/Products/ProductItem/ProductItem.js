import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import classes from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";

function ProductItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)} Ft`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };

  return (
    <li className={classes.product}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductItemForm onAddToCart={addToCartHandler}></ProductItemForm>
      </div>
    </li>
  );
}

export default ProductItem;
