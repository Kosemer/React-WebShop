import classes from "./DeliveryDetails.module.css";
import StepProgressBar from "../Components/Order/StepProgressBar";
import { Fragment, useContext, useState, useRef, useEffect } from "react";
import Card from "../Components/UI/Card";
import OrderSummary from "../Components/Order/OrderSummary";
import CartContext from "../Store/cart-context";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, push, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import EmptyCart from "../Components/Order/EmptyCart";

function DeliveryDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const firebaseConfig = {
    apiKey: "AIzaSyA9I3pmY-2rE2GekX7A3angjr9GI8Gc-3U",
    authDomain: "webshopproducts-c1673.firebaseapp.com",
    databaseURL: "https://webshopproducts-c1673-default-rtdb.firebaseio.com",
    projectId: "webshopproducts-c1673",
    storageBucket: "webshopproducts-c1673.appspot.com",
    messagingSenderId: "299385041421",
    appId: "1:299385041421:web:f8fbc0b3be8c0d016a1b44",
  };

  const firestore = getFirestore();

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

  const database = getDatabase();
  const ordersRef = ref(database, "orders");
  const app = initializeApp(firebaseConfig);

  const handleContinueClick = () => {
    const isFormValid = Object.values(cartCtx.formValues).every(
      (value) => value !== ""
    );
    if (isFormValid) {
      const ordersRef = ref(getDatabase(app), "orders");
      const newOrderRef = push(ordersRef);

      set(newOrderRef, {
        email: cartCtx.formValues.email,
        phone: cartCtx.formValues.phone,
        name: cartCtx.formValues.name,
        postalCode: cartCtx.formValues.postalCode,
        city: cartCtx.formValues.city,
        street: cartCtx.formValues.street,
        floor: cartCtx.formValues.floor,
        items: cartCtx.items,
        totalAmount: cartCtx.totalAmount,
        shippingCost: cartCtx.shippingCost,
        selectedShippingMethod: cartCtx.selectedShippingMethod,
        selectedPaymentMethod: cartCtx.selectedPaymentMethod,
      })

      
        .then(() => {
          cartCtx.setOrderId(newOrderRef.key); // Rendelés azonosító kiolvasása
          // Kosár tartalmának törlése
          //cartCtx.replaceCartItems([]);
          // Változók értékeinek nullázása
          cartCtx.setSelectedShippingMethod("");
          cartCtx.setSelectedPaymentMethod("");
          cartCtx.setFormValues({
            email: "",
            phone: "",
            name: "",
            postalCode: "",
            city: "",
            street: "",
            floor: "",
          });
          navigate("/rendeles");
        })
        .catch((error) => {
          console.log("Hiba történt a rendelés mentése során:", error);
        });
    } else {
      setContinueClicked(true);
      window.scrollTo(0, 0);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    cartCtx.setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const shouldCallContinueClick = true;

  return (
    <Fragment>
      {!cartCtx.isCartEmpty && (
        <div>
      <div className={classes.progressBar}>
        <StepProgressBar></StepProgressBar>
      </div>
      <section className={classes.products}>
        <section className={classes.items}>
          <Card>
            <h2 className={classes.titleBox}>Kapcsolattartás</h2>
            <div className={classes.fields}>
              <div className={classes.inputBox}>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={cartCtx.formValues.email}
                  onChange={handleInputChange}
                ></input>
                {continueClicked && cartCtx.formValues.email === "" && (
                  <p className={classes.requiredField}>
                    A mező kitöltése kötelező
                  </p>
                )}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="phone">Telefonszám:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={cartCtx.formValues.phone}
                  onChange={handleInputChange}
                  className={classes.shortField}
                ></input>
                {continueClicked && cartCtx.formValues.phone === "" && (
                  <p className={classes.requiredField}>
                    A mező kitöltése kötelező
                  </p>
                )}
              </div>
            </div>
            <h2 className={classes.titleBox}>Számlázási adatok</h2>
            <div className={classes.fields}>
              <div className={classes.inputBox}>
                <label htmlFor="name">Név:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  size="60"
                  value={cartCtx.formValues.name}
                  onChange={handleInputChange}
                ></input>
                {continueClicked && cartCtx.formValues.name === "" && (
                  <p className={classes.requiredField}>
                    A mező kitöltése kötelező!
                  </p>
                )}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="postalCode">Irányítószám:</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  minLength="4"
                  size="30"
                  value={cartCtx.formValues.postalCode}
                  onChange={handleInputChange}
                  className={classes.shortField}
                ></input>
                {continueClicked && cartCtx.formValues.postalCode === "" && (
                  <p className={classes.requiredField}>
                    A mező kitöltése kötelező
                  </p>
                )}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="city">Település:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={cartCtx.formValues.city}
                  onChange={handleInputChange}
                ></input>
                {continueClicked && cartCtx.formValues.city === "" && (
                  <p className={classes.requiredField}>
                    A mező kitöltése kötelező
                  </p>
                )}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="street">Utca, házszám:</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={cartCtx.formValues.street}
                  onChange={handleInputChange}
                ></input>
                {continueClicked && cartCtx.formValues.street === "" && (
                  <p className={classes.requiredField}>
                    A mező kitöltése kötelező
                  </p>
                )}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="floor">Emelet, ajtó:</label>
                <input
                  type="text"
                  id="floor"
                  name="floor"
                  className={classes.shortField}
                  value={cartCtx.formValues.floor}
                  onChange={handleInputChange}
                ></input>
                {continueClicked && cartCtx.formValues.floor === "" && (
                  <p className={classes.requiredField}>
                    A mező kitöltése kötelező
                  </p>
                )}
              </div>
              <div className={classes.inputBox}>
                <label htmlFor="taxNumber">Adószám (ha van):</label>
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
                  <label htmlFor="name">Név:</label>
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
                    <label htmlFor="town">Település:</label>
                    <input type="text" id="town" name="town"></input>
                  </div>
                  <div className={classes.inputBox}>
                    <label htmlFor="street">Utca, házszám:</label>
                    <input type="text" id="street" name="street"></input>
                  </div>
                  <div className={classes.inputBox}>
                    <label htmlFor="floor">Emelet, ajtó:</label>
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
              <label htmlFor="comment">
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
            handleContinueClick={
              shouldCallContinueClick ? handleContinueClick : null
            }
            buttonText={"Rendelés"}
          ></OrderSummary>
        </section>
      </section>
      </div>
       )}
       {cartCtx.isCartEmpty && <EmptyCart></EmptyCart>}
    </Fragment>
  );
}

export default DeliveryDetails;
