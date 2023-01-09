import Input from "../../UI/Input";
import classes from "./ProductItemForm.module.css";

function ProductItemForm(props) {
  return (
    <form className={classes.form}>
      <Input label='Amount' input={{
        id: 'amount' + props.id,
        type: 'number',
        min: '1',
        max: '99',
        step: '1',
        defaultValue: '1'
      }}></Input>
      <button>+ Add</button>
    </form>
  );
}

export default ProductItemForm;
