import Products from "../Components/Products/Products";
import classes from "./CategoryDescription.module.css";
import Card from "../Components/UI/Card";
import { useEffect } from "react";

function Merevlemezek() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const url =
    "https://webshopproducts-c1673-default-rtdb.firebaseio.com/products/merevlemezek.json";
  return (
    <div>
      <Card className={classes.container}>
        <div>
          <h2>Merevlemezek (winchesterek)</h2>
          <p className={classes.description}>
            {" "}
            A merevlemezt (amit sokszor winchester vagy háttértár néven is
            emlegetnek) számítógép, laptop és egyéb eszközök adatainak
            tárolására és biztonsági mentésére használják. A merevlemez lehet
            belső háttértár vagy külső háttértár. Belső merevlemezt akkor
            használunk, ha számítógépet építünk, vagy bővíteni kell a tárhelyét.
            A külső winchester alkalmas olyan adatok tárolására, mint például
            filmek, fényképek, zene vagy biztonsági mentések. A külső winchester
            az asztali számítógéphez, laptophoz és TV-hez általában USB-n
            keresztül csatlakozik.
          </p>
        </div>
      </Card>
      <Products url={url}></Products>
    </div>
  );
}

export default Merevlemezek;
