import { Fragment } from "react";
import classes from "./Header.module.css";
import blueImage from '../../Assets/bluePicture.jpg'
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>WebShop</h1>
        <HeaderCartButton showCartHandler={props.showCartHandler}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={blueImage} alt='Header background'></img>
      </div>
    </Fragment>
  );
}

export default Header;
