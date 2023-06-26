import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import classes from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";
import { Link, useNavigate } from "react-router-dom";

function ProductItem(props) {
  const cartCtx = useContext(CartContext);
  //const price = `${props.price.toFixed(3)} Ft`;
  const price = props.price.toLocaleString("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0,
  });

  const navigate = useNavigate();

  const productNavigate = () => {
    navigate(`/product-detail/${props.id}`);
  };

  const addToCartHandler = (amount) => {
    const newItem = {
      id: props.id,
      name: props.name,
      amount: 1,
      parentId: props.parentId,
      price: props.price,
      processor: props.processor,
      image: props.image,
      memory: props.memory,
      connectivity: props.connectivity,
    };

    cartCtx.addItem(newItem);

    // kosár mentése az adatbázisba
    /*fetch("https://webshopproducts-c1673-default-rtdb.firebaseio.com/cart.json", {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add item to cart");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Item added to cart:", data);
      })
      .catch((error) => {
        console.error(error);
      });*/
  };

  return (
    <li className={classes.product}>
      <div className={classes.productTitle} onClick={productNavigate}>
        <Link
          to={`/product-detail/${props.id}`}
          className={classes.productName}
        >
          {props.name}
        </Link>
        <div className={classes.imgBox}>
          <img alt="Computer parts" src={props.image}></img>
          {/*<div className={classes.description}>{props.description}</div>*/}
          {/*<div className={classes.description}>{props.processor}</div>*/}
          {/*<div className={classes.price}>{props.id}</div>*/}
        </div>
      </div>
      <div className={classes.priceButton}>
        <div className={classes.price}>{price}</div>
        <button className={classes.addToCartButton} onClick={addToCartHandler}>
          Kosárba teszem
        </button>
      </div>
      {/*<div>
        <ProductItemForm onAddToCart={addToCartHandler}></ProductItemForm>
  </div>*/}
    </li>
  );
}

export default ProductItem;
