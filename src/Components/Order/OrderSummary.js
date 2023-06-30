import classes from "./OrderSummary.module.css";
import Card from "../UI/Card";
import arrowContinue from "../../Assets/arrowContinue.png";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import { useNavigate } from "react-router-dom";

function OrderSummary(props) {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();

  const NavigateCheckout = () => {
    navigate(cartCtx.nextPage);
  };

  // TOTALAMOUNT FORMÁZÁSA
  const totalAmount = cartCtx.totalAmount.toLocaleString("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0,
  });

  // SZÁLLÍTÁSI KÖLTSÉG
  let shippingCost;
  let totalAmountShippingCost;

  if (cartCtx.shippingCost === "Ingyenes") {
    shippingCost = <p className={classes.shipping}>{cartCtx.shippingCost}</p>;
    totalAmountShippingCost = totalAmount;
  } else {
    shippingCost = `${cartCtx.shippingCost} Ft`;
    totalAmountShippingCost = cartCtx.totalAmount + cartCtx.shippingCost;

    totalAmountShippingCost = totalAmountShippingCost.toLocaleString("hu-HU", {
      style: "currency",
      currency: "HUF",
      maximumFractionDigits: 0,
    });
  }

  return (
    <section className={classes.container}>
      <Card>
        <div className={classes.total}>
          <p className={classes.summary}>Rendelés összegzése</p>
          <div className={classes.summaryCost}>
            <div className={classes.details}>
              <p className={classes.pAmount}>Összeg:</p>
              <span>{totalAmount}</span>
            </div>
            <div className={classes.details}>
              <p className={classes.pAmount}>Szállítási költség:</p>
              <span>{shippingCost}</span>
            </div>
          </div>
          <hr className={classes.line}></hr>
          <p className={classes.pAmount}>Végösszeg:</p>
          <p className={classes.totalAmountShippingCost}>
            {totalAmountShippingCost}
          </p>
          <div className={classes.button}>
            <button className={classes.btn} onClick={NavigateCheckout}>
              Folytatás
              <img
                src={arrowContinue}
                style={{
                  width: "25px",
                  marginLeft: "0px",
                  marginRight: "28px",
                  flexDirection: "row-reverse",
                }}
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default OrderSummary;
