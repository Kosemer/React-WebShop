import classes from "./DeliveryDetails.module.css";
import StepProgressBar from "../Components/Order/StepProgressBar";
import { Fragment, useContext, useState, useRef, useEffect } from "react";
import Card from "../Components/UI/Card";
import OrderSummary from "../Components/Order/OrderSummary";
import CartContext from "../Store/cart-context";

function DeliveryDetails() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const cartCtx = useContext(CartContext);

  // A számlázási és szállítási adatok megegyeznek.
  const [deliveryDetailsShow, setDeliveryDetailsShow] = useState(false);

  const deliveryDetailsShowHandler = () => {
    setDeliveryDetailsShow(!deliveryDetailsShow);
  };

  // ORDER STATUS BAR
  cartCtx.orderStatus.cart = false;
  cartCtx.orderStatus.order = false;
  cartCtx.orderStatus.data = true;
  cartCtx.orderStatus.confirmation = false;
  

  return (
    <Fragment>
      <div className={classes.progressBar}>
        <StepProgressBar></StepProgressBar>
      </div>
      <section className={classes.products}>
        <section className={classes.items}>
          <Card>
            <h2 className={classes.titleBox}>Kapcsolattartás</h2>
            <div className={classes.fields}>
              <div className={classes.inputBox}>
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email"></input>
              </div>
              <div className={classes.inputBox}>
                <label for="phoneNumber">Telefonszám:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className={classes.shortField}
                ></input>
              </div>
            </div>
            <h2 className={classes.titleBox}>Számlázási adatok</h2>
            <div className={classes.fields}>
              <div className={classes.inputBox}>
                <label for="name">Név:</label>
                <input type="text" id="name" name="name" size="60"></input>
              </div>
              <div className={classes.inputBox}>
                <label for="postalCode">Irányítószám:</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  minLength="4"
                  size="30"
                  className={classes.shortField}
                ></input>
              </div>
              <div className={classes.inputBox}>
                <label for="town">Település:</label>
                <input type="text" id="town" name="town"></input>
              </div>
              <div className={classes.inputBox}>
                <label for="street">Utca, házszám:</label>
                <input type="text" id="street" name="street"></input>
              </div>
              <div className={classes.inputBox}>
                <label for="floor">Emelet, ajtó:</label>
                <input
                  type="text"
                  id="floor"
                  name="floor"
                  className={classes.shortField}
                ></input>
              </div>
              <div className={classes.inputBox}>
                <label for="taxNumber">Adószám (ha van):</label>
                <input type="text" id="taxNumber" name="taxNumber"></input>
              </div>
            </div>
            <input
              type="checkbox"
              defaultChecked={true}
              onClick={deliveryDetailsShowHandler}
            ></input>
            <p className={classes.deliveryCheckbox}>A szállítási és a számlázási adatok megegyeznek.</p>
            {deliveryDetailsShow && (
              <Fragment>
                <h2 className={classes.titleBox}>Szállítási adatok</h2>
                <div className={classes.fields}>
                  <label for="name">Név:</label>
                  <input type="text" id="name" name="name" size="60"></input>
                  <div className={classes.inputBox}>
                    <label for="postalCode">Irányítószám:</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      minlength="4"
                      className={classes.shortField}
                    ></input>
                  </div>
                  <div className={classes.inputBox}>
                    <label for="town">Település:</label>
                    <input type="text" id="town" name="town"></input>
                  </div>
                  <div className={classes.inputBox}>
                    <label for="street">Utca, házszám:</label>
                    <input type="text" id="street" name="street"></input>
                  </div>
                  <div className={classes.inputBox}>
                    <label for="floor">Emelet, ajtó:</label>
                    <input
                      type="text"
                      id="floor"
                      name="floor"
                      className={classes.shortField}
                    ></input>
                  </div>
                </div>
              </Fragment>
            )}
            <h2 className={classes.titleBox}>Megjegyzés</h2>
            <div className={classes.fieldsComment}>
              <label for="comment">
                Ha bármilyen további információt szeretne közölni, akkor
                használja az alábbi mezőt:
              </label>
              <textarea
                rows="10"
                cols="120"
                id="comment"
                name="comment"
                type="text"
              ></textarea>
            </div>
          </Card>
        </section>
        <section className={classes.amount}>
          <OrderSummary></OrderSummary>
        </section>
      </section>
    </Fragment>
  );
}

export default DeliveryDetails;
