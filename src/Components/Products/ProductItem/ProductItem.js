import classes from './ProductItem.module.css'
import ProductItemForm from './ProductItemForm';

function ProductItem(props) {
    const price = `${props.price.toFixed(2)} Ft`
  return (
    <li className={classes.product}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
         <ProductItemForm></ProductItemForm>
      </div>
    </li>
  );
}

export default ProductItem;
