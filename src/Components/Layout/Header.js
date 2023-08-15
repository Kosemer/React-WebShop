import { Fragment, useContext, useState, useEffect } from "react";
import classes from "./Header.module.css";
//import blueImage from "../../Assets/bluePicture.jpg";
//import logoutIcon from "../../Assets/logoutIcon.png";
import HeaderCartButton from "./HeaderCartButton";
import { NavLink, useNavigate } from "react-router-dom";
import CartContext from "../../Store/cart-context";
import BurgerButton from "../UI/BurgerButton";
import CartButtonMobile from "../UI/CartButtonMobile";
import LogoutIcon from "../../Assets/LogoutIcon";

function Header(props) {
  const cartCtx = useContext(CartContext);

  const cssMobile = cartCtx.cssMobile;
  const setCssMobile = cartCtx.setCssMobile;

  const moblieMenuChange = () => {
    setCssMobile(!cartCtx.cssMobile);
  };

  //MOBILNÉZETBEN KOMPONENSEK ELTÜNTETÉSE

  //const headerClasses = `${classes.header} ${cssMobile ? classes.active : ""}`;

  const navigate = useNavigate();

  const logoutHandler = () => {
    cartCtx.setIsLoggedIn(false)
    navigate("/login");
  };

  const homeHandler = () => {
    navigate("/");
  };

  /*const cartHandler = () => {
    navigate("/kosar");
  };*/

  const [scrolling, setScrolling] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrolling(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const headerClasses = `${classes.header} ${
    cssMobile || scrolling ? classes.active : ""
  } ${scrolling ? "" : classes.headerHidden}`;

  return (
    <Fragment>
    
          <header className={headerClasses}>
            <div className={classes.logoutIcon}>
              <div onClick={logoutHandler} className={classes.navigate}>
                <LogoutIcon></LogoutIcon>
              </div>
            </div>
            <nav>
              <ul onClick={moblieMenuChange}>
                <h1 className={classes.HomePageIcon} onClick={homeHandler}>
                  WebShop
                </h1>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? classes.active : ""
                    }
                    to="/alaplapok"
                  >
                    Alaplap
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? classes.active : ""
                    }
                    to="/memoriak"
                  >
                    Memória
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? classes.active : ""
                    }
                    to="/merevlemezek"
                  >
                    Merevlemez
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? classes.active : ""
                    }
                    to="/processzorok"
                  >
                    Processzor
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? classes.active : ""
                    }
                    to="/videokartyak"
                  >
                    Videókártya
                  </NavLink>
                </li>
 
              </ul>
            </nav>

            <div className={classes.cartButtonMobile}>
              <CartButtonMobile
                showCartHandler={props.showCartHandler}
              ></CartButtonMobile>
            </div>
            <BurgerButton moblieMenuChange={moblieMenuChange}></BurgerButton>
            <div className={classes.headerCartButton}>
              <HeaderCartButton
                showCartHandler={props.showCartHandler}
              ></HeaderCartButton>
            </div>
          </header>

    </Fragment>
  );
}

export default Header;
