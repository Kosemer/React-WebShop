import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./ProductItemForm.module.css";

function ProductItemForm(props) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true)

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 99
    ) {
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Mennyiség:"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "99",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Kosárba</button>
      {!amountIsValid && <p>Please enter a valid amount.</p>}
    </form>
  );
}

export default ProductItemForm;
