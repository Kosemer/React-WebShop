import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";


function Cart(props) {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate()

  const navigateCart = () => {
    navigate("/kosar")
    props.hideCartHandler()
  }

  //const totalAmount = `${cartCtx.totalAmount.toFixed(3)} Ft`;
  const totalAmount = cartCtx.totalAmount.toLocaleString("hu-HU", {style:"currency", currency:"HUF", maximumFractionDigits: 0})
  //const totalAmount = `${cartCtx.totalAmount} Ft`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };

  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  //ÜRES A KOSÁR VAGY NEM
  /*const { items } = cartCtx;
  const [cartIsEmpty, setCartIsEmpty] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      setCartIsEmpty(false);
    }
    if (items.length > 0) {
      setCartIsEmpty(true);
    }
  }, [items]);*/

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          image={item.image}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartRemoveHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <p className={classes.totalAmountTitle}>Teljes összeg:</p>
        <span className={classes.totalAmount}>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Bezár
        </button>
        {hasItems && <button className={classes.button} onClick={navigateCart}>Rendelés</button>}
      </div>
    </Modal>
  );
}

export default Cart;
