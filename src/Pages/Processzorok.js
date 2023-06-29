import Products from "../Components/Products/Products";
import Card from "../Components/UI/Card";
import classes from './CategoryDescription.module.css'
import { useEffect } from "react";

function Processzorok() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const url =
    "https://webshopproducts-c1673-default-rtdb.firebaseio.com/products/processzorok.json";
  return (
    <div>
      <Card className={classes.container}>
        <div>
          <h2>CPU-Processzorok</h2>
          <p className={classes.description}>
            {" "}
            A processzor az egész számítógép agya. A megfelelő modell kiválasztásával felgyorsíthatod az igényes alkalmazások futtatását, kihozhatod a legtöbbet a grafikus kártyából és minimalizálhatod az energiafogyasztást. Ne feledd, hogy a processzor foglalatának (socket) meg kell egyeznie az alaplap foglalatával.
          </p>
        </div>
      </Card>
      <Products url={url}></Products>
    </div>
  );
}

export default Processzorok;
