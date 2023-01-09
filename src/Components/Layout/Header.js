import { Fragment } from "react";
import classes from "./Header.module.css";
import blueImage from '../../Assets/bluePicture.jpg'
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>WebShop</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={blueImage} alt='Header background'></img>
      </div>
    </Fragment>
  );
}

export default Header;
