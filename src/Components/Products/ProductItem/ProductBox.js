import React from "react";
import classes from "./ProductBox.module.css";
import CartContext from "../../../Store/cart-context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
    if (animatedButtonId === null) {
      setButtonIsAnimated(true);
      const timer = setTimeout(() => {
        setButtonIsAnimated(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  };

  const [buttonIsAnimated, setButtonIsAnimated] = useState(false)
  const [animatedButtonId, setAnimatedButtonId] = useState(null);

  const {items} = cartCtx;
  

  const btnClasses = `${classes.button} ${buttonIsAnimated ? classes.bump : ''}`

  useEffect(() => {
    if(items.length === 0 || id !== animatedButtonId){
      return
    }
    setButtonIsAnimated(true) // Amikor true akkor hozzáadja a "classes.bump" a "btnClasses"-hoz és lefut az animáció.

    const timer = setTimeout(() => {
      setButtonIsAnimated(false) // Amikor ez false akkor egy üres karakterláncot fog hozzáadni a btnClasses-hoz, tehát az értéke "classes.button" lesz és így nem játsza le az animációt.
    }, 300)
    // Teszek bele egy "tisztítás" funkciót, ez arra jó, hogy tőrlöm az időzítőt, ha a gomb elemet el kell távolítani. Ebben az alkalmazásban nem lesz haszna, mert ez a gomb mindig ott van, csak egy kis gyakorlásnak csinálom.
    return () => {
      clearTimeout(timer)
    }
  }, [items, id, animatedButtonId])

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
        <button className={btnClasses} onClick={addToCartHandler}>
          Kosárba
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
