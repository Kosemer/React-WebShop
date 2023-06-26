import classes from "./ProductDetailLayout.module.css";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import calendarIcon from "../../Assets/calendarIcon.ico";
import locationIcon from "../../Assets/locationIcon.ico";

function ProductDetailLayout(props) {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: 1,
      price: props.price,
      processor: props.processor,
      image: props.image,
      memory: props.memory,
      connectivity: props.connectivity,
    });
  };
  const price = props.price.toLocaleString("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0,
  });
  return (
    <div className={classes.card}>
      <li className={classes.product}>
        <div className={classes.productTitle}>
          <div>
            <img alt="Computer parts" src={props.image}></img>
          </div>
        </div>
        <div className={classes.container}>
          {/*<ProductItemForm onAddToCart={addToCartHandler}></ProductItemForm>*/}
          <div className={classes.name}>{props.name}</div>
          <div className={classes.price}>{price}</div>
          <h3 className={classes.inStock}>&#10004; Készleten</h3>
          <button
            className={classes.addToCartButton}
            onClick={addToCartHandler}
          >
            Kosárba teszem
          </button>
          <div className={classes.delivery}>
            <div className={classes.deliveryTo}>
              <img src={calendarIcon} alt="calendarIcon"></img>
              <div className={classes.deliveryText}>
              <strong>Kiszállítás</strong>
              <br></br>
              <br></br>
              Akár 1-5 munkanapon belül házhoz szállítjuk a rendelésed. A
              kiszállítási módokat a pénztárban mutatjuk.
              </div>
            </div>
            <div className={classes.personalReceipt}>
            <img src={locationIcon} alt="locationIcon"></img>
            <div className={classes.deliveryText}>
              <strong>Személyes átvétel</strong>
              <br></br>
              <br></br>
              Üzleteinkben vagy csomagponton a rendelésed leadásától számítva
              1-5 munkanapon belül átveheted azt.
              </div>
            </div>
          </div>
        </div>
      </li>
      <div className={classes.descriptionContainer}>
        <h2>Leírás</h2>
        <div className={classes.description}>{props.description}</div>
        {props.processor !== undefined && (
          <div className={classes.description}>
            <strong>Processzor: </strong>
            {props.processor}
          </div>
        )}
        {props.memory !== undefined && (
          <div className={classes.description}>
            <strong>Memória típusa: </strong>
            {props.memory}
          </div>
        )}
        {props.connectivity !== undefined && (
          <div className={classes.description}>
            <strong>Csatlakozás: </strong> {props.connectivity}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailLayout;
