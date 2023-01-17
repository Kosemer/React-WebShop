import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import classes from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";

function ProductItem(props) {
  const cartCtx = useContext(CartContext);
  //const price = `${props.price.toFixed(3)} Ft`;
  const price = props.price.toLocaleString("hu-HU", {style:"currency", currency:"HUF", maximumFractionDigits: 0});

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      processor: props.processor,
      image: props.image,
    });
  };

  return (
    <li className={classes.product}>
      <div>
        <h3>{props.name}</h3>
        <img alt="Computer parts" src={props.image}></img>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.description}>{props.processor}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductItemForm onAddToCart={addToCartHandler}></ProductItemForm>
      </div>
    </li>
  );
}

export default ProductItem;
