import classes from './CartItem.module.css';

const CartItem = (props) => {
  //const price = `$${props.price.toFixed(3)}`;
  const price = props.price.toLocaleString("hu-HU", {style:"currency", currency:"HUF", maximumFractionDigits: 0});

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        
        <div className={classes.summary}>
          <img alt='sa' src={props.image} className={classes.cartImage}></img>

        </div>
      </div>
      <div className={classes.priceBox}>
      <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
      
    </li>
  );
};

export default CartItem;
