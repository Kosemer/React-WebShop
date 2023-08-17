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
          <h2>SSD meghajtók</h2>
          <p className={classes.description}>
            {" "}
            Az SSD meghajtók (Solid-State Drive) korszerű és hatékony
            adattárolási eszközök, amelyek jelentős előrelépést jelentenek a
            hagyományos merevlemezekhez képest. Az SSD-k lényegében nincsenek
            mozgó alkatrészek, mivel adataikat villamos töltések formájában
            tárolják. Az SSD meghajtók különböző kapacitásokban és formátumokban
            elérhetők, és széles körű alkalmazásokban használhatók, beleértve a
            számítógépek, laptopok, játékkonzolok és szerverek felgyorsítását.
            Az SSD-k általánosságban a modern adattárolás megbízható és gyors
            megoldását kínálják.
          </p>
        </div>
      </Card>
      <Products url={url}></Products>
    </div>
  );
}

export default Merevlemezek;
