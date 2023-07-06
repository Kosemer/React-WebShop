import classes from "./DeliveryDetails.module.css";
import StepProgressBar from "../Components/Order/StepProgressBar";
import { Fragment, useContext, useState, useRef, useEffect } from "react";
import Card from "../Components/UI/Card";
import OrderSummary from "../Components/Order/OrderSummary";
import CartContext from "../Store/cart-context";
import { useNavigate } from "react-router-dom";

function DeliveryDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

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
  

  const [continueClicked, setContinueClicked] = useState(false);
  

  const handleContinueClick = () => {
    const isFormValid = Object.values(formValues).every(value => value !== "");
    
    if (isFormValid) {
      navigate("/rendeles");
    } else {
      setContinueClicked(true);
      window.scrollTo(0, 0);
    }
  };
  
  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    name: "",
    postalCode: "",
    city: "",
    street: "",
    floor: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

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
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                ></input>
                {continueClicked && formValues.email === "" && (
                  <p className={classes.requiredField}>A mező kitöltése kötelező</p>
                )}
              </div>
              <div className={classes.inputBox}>
                <label for="phone">Telefonszám:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className={classes.shortField}
                ></input>
                {continueClicked && formValues.phone === "" && (
                  <p className={classes.requiredField}>A mező kitöltése kötelező</p>
                )}
              </div>
            </div>
            <h2 className={classes.titleBox}>Számlázási adatok</h2>
            <div className={classes.fields}>
              <div className={classes.inputBox}>
                <label for="name">Név:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  size="60"
                  value={formValues.name}
                  onChange={handleInputChange}
                ></input>
                {continueClicked && formValues.name === "" && (
                  <p className={classes.requiredField}>A mező kitöltése kötelező!</p>
                )}
              </div>
              <div className={classes.inputBox}>
                <label for="postalCode">Irányítószám:</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  minLength="4"
                  size="30"
                  value={formValues.postalCode}
                  onChange={handleInputChange}
                  className={classes.shortField}
                ></input>
                {continueClicked && formValues.postalCode === "" && (
                  <p className={classes.requiredField}>A mező kitöltése kötelező</p>
                )}
              </div>
              <div className={classes.inputBox}>
                <label for="city">Település:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formValues.city}
                  onChange={handleInputChange}
                ></input>
                {continueClicked && formValues.city === "" && (
                  <p className={classes.requiredField}>A mező kitöltése kötelező</p>
                )}
              </div>
              <div className={classes.inputBox}>
                <label for="street">Utca, házszám:</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formValues.street}
                  onChange={handleInputChange}
                ></input>
                {continueClicked && formValues.street === "" && (
                  <p className={classes.requiredField}>A mező kitöltése kötelező</p>
                )}
              </div>
              <div className={classes.inputBox}>
                <label for="floor">Emelet, ajtó:</label>
                <input
                  type="text"
                  id="floor"
                  name="floor"
                  className={classes.shortField}
                  value={formValues.floor}
                  onChange={handleInputChange}
                ></input>
                {continueClicked && formValues.floor === "" && (
                  <p className={classes.requiredField}>A mező kitöltése kötelező</p>
                )}
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
            <p className={classes.deliveryCheckbox}>
              A szállítási és a számlázási adatok megegyeznek.
            </p>
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
          <OrderSummary
            handleContinueClick={handleContinueClick}
          ></OrderSummary>
        </section>
      </section>
    </Fragment>
  );
}

export default DeliveryDetails;
