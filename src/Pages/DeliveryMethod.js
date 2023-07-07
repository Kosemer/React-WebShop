import classes from "./DeliveryMethod.module.css";
import { Fragment, useContext, useEffect, useState } from "react";
import Card from "../Components/UI/Card";
import OrderSummary from "../Components/Order/OrderSummary";
import StepProgressBar from "../Components/Order/StepProgressBar";
import CartContext from "../Store/cart-context";
import onlinePay from "../Assets/onlinePay.jpg";
import RadioButton from "../Components/UI/RadioButton";

function DeliveryMethod() {
  const cartCtx = useContext(CartContext);

  let nextPage = "/delivery-details";

  const [selectedShippingMethod, setSelectedShippingMethod] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showPaymentErrorMessage, setShowPaymentErrorMessage] = useState(false);

  const handleShippingMethodChange = (event) => {
    setSelectedShippingMethod(event.target.value);
    setShowErrorMessage(false);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    setShowPaymentErrorMessage(false);
  };

  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
    cartCtx.setNextPage(nextPage);
  };

  useEffect(() => {
    if (clicked) {
      if (!selectedShippingMethod || !selectedPaymentMethod) {
        setShowErrorMessage(!selectedShippingMethod);
        setShowPaymentErrorMessage(!selectedPaymentMethod);
        cartCtx.setNextPage(null);
      } else {
        setShowErrorMessage(false);
        setShowPaymentErrorMessage(false);
        cartCtx.setNextPage(nextPage);
      }
    }
  }, [selectedShippingMethod, selectedPaymentMethod, clicked]);

  // ORDER STATUS BAR
  cartCtx.orderStatus.cart = false;
  cartCtx.orderStatus.order = true;
  cartCtx.orderStatus.data = false;
  cartCtx.orderStatus.confirmation = false;

  // SZÁLLÍTÁSI KÖLTSÉG
  let shippingCost;

  if (cartCtx.shippingCost === "Ingyenes") {
    shippingCost = <p className={classes.shipping}>{cartCtx.shippingCost}</p>;
  } else {
    shippingCost = `${cartCtx.shippingCost} Ft`;
  }

  return (
    <Fragment>
      <div className={classes.progressBar}>
        <StepProgressBar></StepProgressBar>
      </div>
      <section className={classes.products}>
        <section className={classes.items}>
          <Card>
            <h2 className={classes.titleBox}>Szállítási mód választás</h2>
            <button onClick={handleButtonClick}>jksdfnknsdfknsdj</button>
            <RadioButton
              name="shippingMethod"
              value="homeDelivery"
              id="homeDelivery"
              onChange={handleShippingMethodChange}
              checked={selectedShippingMethod === "homeDelivery"}
            >
              <div className={classes.detailsChoose}>
                <h1>Házhozszállítás GLS futárral</h1>
                <p className={classes.pTag}>
                  Házhozszállítás GLS futárral Magyarország egész területén.
                </p>
                <p className={classes.shippingCost}>{shippingCost}</p>
              </div>
            </RadioButton>

            <hr className={classes.line}></hr>
            <RadioButton
              name="shippingMethod"
              value="pickup"
              id="pickup"
              onChange={handleShippingMethodChange}
              checked={selectedShippingMethod === "pickup"}
            >
              <div className={classes.detailsChoose}>
                <h1>Személyes átvétel</h1>
                <p className={classes.pTag} v>
                  Személyes átvételre az alábbi üzletünkben van lehetőséged:
                </p>
                <p className={classes.pTag}>III. ker., Ittátveheted út 85.</p>
                <p className={classes.pTag}>Nyitvatartás: H-P 10-18</p>
              </div>
            </RadioButton>
            {showErrorMessage && (
              <p className={classes.errorMessage}>
                Nincs szállítási mód kiválasztva!
              </p>
            )}
            <hr className={classes.line}></hr>

            <h2 className={classes.titleBox}>Fizetési mód</h2>
            <RadioButton
              name="paymentMethod"
              value="creditCard"
              id="creditCard"
              onChange={handlePaymentMethodChange}
              checked={selectedPaymentMethod === "creditCard"}
            >
              <div className={classes.detailsChoose}>
                <h1>Internetes fizetés bankkártyával, hitelkártyával.</h1>
                <img
                  alt="onlinePay"
                  src={onlinePay}
                  className={classes.onlinePay}
                ></img>
              </div>
            </RadioButton>
            <hr className={classes.line}></hr>
            <RadioButton
              name="paymentMethod"
              value="locally"
              id="locally"
              onChange={handlePaymentMethodChange}
              checked={selectedPaymentMethod === "locally"}
            >
              <div className={classes.detailsChoose}>
                <h1>Utánvét</h1>
                <p className={classes.pTag}>
                  Fizetés készpénzben vagy bankkártyával a futárnak a termék
                  átvételekor.
                </p>
              </div>
            </RadioButton>
            <hr className={classes.line}></hr>
            <RadioButton
              name="paymentMethod"
              value="transferInAdvance"
              id="transferInAdvance"
              onChange={handlePaymentMethodChange}
              checked={selectedPaymentMethod === "transferInAdvance"}
            >
              <div className={classes.detailsChoose}>
                <h1>Előreutalás</h1>
                <p className={classes.pTag}>
                  A visszaigazoló e-mail fogja tartalmazni a tudnivalókat.
                </p>
              </div>
            </RadioButton>
            {showPaymentErrorMessage && (
              <p className={classes.errorMessage}>
                Nincs fizetési mód kiválasztva!
              </p>
            )}
            <hr className={classes.line}></hr>
          </Card>
        </section>
        <section className={classes.amount}>
          <OrderSummary handleButtonClick={handleButtonClick}></OrderSummary>
        </section>
      </section>
    </Fragment>
  );
}

export default DeliveryMethod;
