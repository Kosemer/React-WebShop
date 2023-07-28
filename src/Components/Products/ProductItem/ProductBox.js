import React from "react";
import classes from "./ProductBox.module.css";
import CartContext from "../../../Store/cart-context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductBox = (props) => {
  const { id, name, price, image, processor, memory, connectivity, parentId } = props;

  const cartCtx = useContext(CartContext);

  const navigate = useNavigate();

  const productNavigate = () => {
    cartCtx.setParentId(parentId);
    navigate(`/${parentId}/${id}`);
  };


  const priceFomat = props.price.toLocaleString("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0,
  });

  const addToCartHandler = (amount) => {
    const newItem = {
      id: id,
      name: name,
      amount: 1,
      parentId: parentId,
      price: price,
      //processor: processor,
      image: image,
      //memory: memory,
      //connectivity: connectivity,
    };
    cartCtx.addItem(newItem);
  };

  return (
    <div className={classes.product}>
      <div className={classes.imageBox} onClick={productNavigate}>
        <img src={image} className={classes.productImage} alt={name}></img>
      </div>
      <section className={classes.description} onClick={productNavigate}>
        <p className={classes.productTitle}>{name}</p>
      </section>
      <div className={classes.priceAndButton}>
        <p className={classes.price}>{priceFomat}</p>
        <button className={classes.button} onClick={addToCartHandler}>
          Kosárba
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
