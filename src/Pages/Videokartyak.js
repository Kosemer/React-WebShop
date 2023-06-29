import Products from "../Components/Products/Products";
import Card from "../Components/UI/Card";
import classes from './CategoryDescription.module.css'
import { useEffect } from "react";

function Videokartyak() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const url =
    "https://webshopproducts-c1673-default-rtdb.firebaseio.com/products/videokartyak.json";
  return (
    <div>
      <Card className={classes.container}>
        <div>
        <h2>Videokártyák</h2>
        <p className={classes.description}>
          {" "}
          A dedikált videókártya (a köznyelvben vidi kártya)
          nélkülözhetetlen része minden olyan számítógépnek, ahol nagyobb
          teljesítményre van szükség, mint amekkorát az integrált videókártya
          nyújtani képes. Használhatod játékokhoz, videószerkesztéshez,
          modellezéshez vagy bármilyen más grafikai feldolgozáshoz.
        </p>
        </div>
      </Card>
      <Products url={url}></Products>
    </div>
  );
}

export default Videokartyak;
