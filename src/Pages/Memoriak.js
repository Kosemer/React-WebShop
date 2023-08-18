import Products from "../Components/Products/Products";
import classes from "./CategoryDescription.module.css";
import Card from "../Components/UI/Card";
import { useEffect } from "react";

function Memoriak() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const url =
    "https://webshopproducts-c1673-default-rtdb.firebaseio.com/products/memoriak.json";
  return (
    <div>
      <Card className={classes.container}>
        <div>
          <h2>RAM memória</h2>
          <p className={classes.description}>
            A RAM (Random Access Memory) egy olyan típusú számítógépes memória, amely ideiglenesen tárolja a számítógép által éppen futtatott programok és adatok részleteit. A RAM szerepe alapvető fontosságú a számítógép teljesítményének szempontjából, mivel gyors és könnyű hozzáférést biztosít az adatokhoz, ami lehetővé teszi a gyors programindítást, a folyamatos munkameneteket és az általános rendszerreakciót.
          </p>
        </div>
      </Card>
      <Products url={url}></Products>
    </div>
  );
}

export default Memoriak;
