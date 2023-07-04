import { useRef } from "react";
import classes from "./RadioButton.module.css";

function RadioButton(props) {

  // RADIO BUTTON
  // Ahhoz hogy mindig csak egy lehessen aktív ugyanazt a "name"-et kell megadni nekik, így egy csopotba tartoznak.
  // Ez így néz ki, ezeket az adatokat használják (Ebben az esetben 2 radio button van):
  // 1. <Checkbox name="shippingMethod" value="homeDelivery" id="homeDelivery">
  // 2. <Checkbox name="shippingMethod" value="pickup" id="pickup">

  const radioRef = useRef(null);

  const handleContainerClick = () => {
    radioRef.current.click();
    // A .click() egy metódus ami meghívható a HTML input elemeken, és ez simán meghívja a click eseményt az adott elemen.

    //A radioRef.current.click() meghívja a click eseményt a radio gombon, ami egyenlő azzal ha kézzel rákattintanának a radio gombra.
  };
  

  return (
    <div className={classes.radioConatiner} onClick={handleContainerClick}>
      <div className={classes["radio-wrapper-19"]}>
        <input
          ref={radioRef}
          type="radio"
          name={props.name}
          value={props.value}
          id={props.id}
         
        />
        <label htmlFor={props.value} className={classes["radio-box"]} />
      </div>
      {props.children}
    </div>
  );
}

export default RadioButton;
