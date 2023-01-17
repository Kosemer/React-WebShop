import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";


function HeaderCartButton(props) {
  const [buttonIsAnimated, setButtonIsAnimated] = useState(false)
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${buttonIsAnimated ? classes.bump : ''}`

  useEffect(() => {
    if(items.length === 0){
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
  }, [items])

  return (
    <button className={btnClasses} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
