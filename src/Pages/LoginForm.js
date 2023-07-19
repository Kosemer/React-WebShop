import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../Store/cart-context";
import classes from "./LoginForm.module.css";

function LoginForm(props) {

const cartCtx = useContext(CartContext);

const navigate = useNavigate()

const loginHandler = (event) => {
    event.preventDefault()
    props.setIsLoggedIn(true)
    navigate("/")
}

  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <div className={classes.shape}></div>
        <div className={classes.shape}></div>
      </div>
      <form action="" className={classes.formLogin}>
        <h3>Bejelentkezés</h3>

        <label className={classes.label} htmlFor="username">Felhasználónév</label>
        <input className={classes.input} type="text" placeholder="E-mail" id="username"></input>

        <label className={classes.label} htmlFor="password">Jelszó</label>
        <input className={classes.input} type="password" placeholder="Jelszó" id="password"></input>

        <button className={classes.loginButton} onClick={loginHandler}>Belépés</button>
      </form>
    </div>
  );
}

export default LoginForm;
