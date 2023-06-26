import Products from "../Components/Products/Products";
import classes from "./CategoryDescription.module.css";
import Card from "../Components/UI/Card";

function Memoriak() {
  const url =
    "https://webshopproducts-c1673-default-rtdb.firebaseio.com/products/memoriak.json";
  return (
    <div>
      <Card className={classes.container}>
        <div>
          <h2>RAM memória</h2>
          <p className={classes.description}>
            {" "}
            Amennyiben az általad választott RAM memória termék készleten van, akár a rendelés napján ki tudjuk szállítani. Budapesti áruházunkban 5 percen belül személyesen át tudunk adni bármit, számos raktáron lévő termékünk közül.
          </p>
        </div>
      </Card>
      <Products url={url}></Products>
    </div>
  );
}

export default Memoriak;
