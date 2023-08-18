import classes from "./Home.module.css";
import iphone14pro from "../Assets/iphone14pro.jpg";
import ps5ControllerPro from "../Assets/ps5ControllerPro.jpg";
import macBookPro from "../Assets/macBookPro.jpg";
import win95 from "../Assets/win95.jpg";
import processor from "../Assets/processor.png";
import hardDrive from "../Assets/hardDrive.png";
import videoCard from "../Assets/videoCard.png";
import geforce3070 from "../Assets/videoCard.png";
import sapphireRadeon from "../Assets/videoCard.png";
import zotac from "../Assets/videoCard.png";
import msi from "../Assets/videoCard.png";
import motherboard from "../Assets/motherboard.png";
import ram from "../Assets/ram.png";
import cooler from "../Assets/cooler.png";
import { NavLink, useNavigate } from "react-router-dom";
import Slider from "../Components/UI/Slider/Slider";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { useState, useEffect, useContext } from "react";
import ProductItem from "../Components/Products/ProductItem/ProductItem";
import ProductBox from "../Components/Products/ProductItem/ProductBox";
import CartContext from "../Store/cart-context";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  const navigateClick = (page) => {
    navigate(`/${page}`);
  };

  const [popularProducts, setPopularProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  // Firebase konfiguráció inicializálása
  const firebaseConfig = {
    apiKey: "AIzaSyA9I3pmY-2rE2GekX7A3angjr9GI8Gc-3U",
    authDomain: "webshopproducts-c1673.firebaseapp.com",
    databaseURL: "https://webshopproducts-c1673-default-rtdb.firebaseio.com",
    projectId: "webshopproducts-c1673",
    storageBucket: "webshopproducts-c1673.appspot.com",
    messagingSenderId: "299385041421",
    appId: "1:299385041421:web:f8fbc0b3be8c0d016a1b44",
  };

  const app = initializeApp(firebaseConfig);

  useEffect(() => {
    const fetchProduct = async () => {
      const database = getDatabase(app);

      // Lekérdezés a PopularProducts táblából
      const productRef = ref(database, `PopularProducts/`);
      const snapshot = await get(productRef);
      const loadedProducts = snapshot.val();
      if (loadedProducts) {
        const productsArray = Object.entries(loadedProducts).map(
          ([key, value]) => ({
            id: key,
            ...value,
          })
        );
        setPopularProducts(productsArray);
      }

      // Lekérdezés a NewProducts táblából
      const newProductRef = ref(database, "newProducts/");
      const newSnapshot = await get(newProductRef);
      const newProductsData = newSnapshot.val();
      if (newProductsData) {
        const newProductsArray = Object.entries(newProductsData).map(
          ([key, value]) => ({
            id: key,
            ...value,
          })
        );
        setNewProducts(newProductsArray);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <Slider></Slider>
      <div className={classes.container}>
        <section className={classes.topicBoxes}>
          <div onClick={() => navigateClick("merevlemezek")}>
            <img
              src={hardDrive}
              className={classes.boxesIcon}
              alt="hardDrive"
            ></img>
            SSD meghajtók
          </div>
          <div onClick={() => navigateClick("processzorok")}>
            <img
              src={processor}
              className={classes.boxesIcon}
              alt="processor"
            ></img>
            Processzorok
          </div>
          <div onClick={() => navigateClick("videokartyak")}>
            <img
              src={videoCard}
              className={classes.boxesIcon}
              alt="videoCard"
            ></img>
            Videókártyák
          </div>
          <div onClick={() => navigateClick("alaplapok")}>
            <img
              src={motherboard}
              className={classes.boxesIcon}
              alt="motherboard"
            ></img>
            Alaplapok
          </div>
          <div onClick={() => navigateClick("memoriak")}>
            <img src={ram} className={classes.boxesIcon} alt="ram"></img>
            Memóriák
          </div>
        </section>
        <h2 className={classes.title}>Népszerű termékek</h2>
        <hr className={classes.underlineLong}></hr>
        <section className={classes.popularProducts}>
          {popularProducts.map((product) => (
            <ProductBox
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              parentId={product.parentId}
            />
          ))}
        </section>
        <h2 className={classes.title}>Újdonságok</h2>
        <hr className={classes.underlineLong}></hr>
        <section className={classes.popularProducts}>
          {newProducts.map((product) => (
            <ProductBox
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              parentId={product.parentId}
            />
          ))}
        </section>
        <h2 className={classes.title}>Hírek</h2>
        <hr className={classes.underline}></hr>
        <section className={classes.whatsNew}>
          <div>
            <img src={iphone14pro} alt="iphone14pro"></img>
          </div>
          <p className={classes.newTitle}>
            Iphone 14 Pro Max, az interakció új formája és kompromisszumok
            nélküli fotótás.
          </p>
          <div>
            <img src={win95} alt="win95"></img>
          </div>
          <p className={classes.newTitle}>
            A Microsoft bejelentette a Windows legújabb és forradalmi
            változatát.
          </p>
          <div>
            <img src={macBookPro} alt="macBookPro"></img>
          </div>
          <p className={classes.newTitle}>
            Az Apple bejelentette a legújabb MacBook Pro-t, 70%-al erősebb M2-es
            processzorral.
          </p>
          <div>
            <img src={ps5ControllerPro} alt="ps5ControllerPro"></img>
          </div>
          <p className={classes.newTitle}>
            Megjelent a PlayStation 5 legújabb pro kontrollere. Azoknak, akik
            igazán komolyan veszik a játékot.
          </p>
        </section>
      </div>
    </div>
  );
};
export default Home;
