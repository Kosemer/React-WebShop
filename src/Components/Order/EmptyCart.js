import Card from "../UI/Card";
import classes from "./EmptyCart.module.css";
import { Link } from "react-router-dom";
import emptyCart from "../../Assets/emptyCart.png";

function EmptyCart() {
  return (
    <div className={classes.emptyCart}>
      <Card>
        <div className={classes.emptyText}>
          <h1>A kosarad üres</h1>
          <p>
            Térj vissza a{" "}
            <Link to="/" className={classes.link}>
              főoldalra
            </Link>
            , folytasd a böngészést és adj hozzá mindent, ami tetszik! :)
          </p>
        </div>
        <img
          alt="emptyCart"
          src={emptyCart}
          className={classes.emptyCartImage}
        ></img>
      </Card>
    </div>
  );
}

export default EmptyCart;
