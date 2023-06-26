import Products from "../Components/Products/Products";
import classes from "./CategoryDescription.module.css";
import Card from "../Components/UI/Card";

function Alaplapok() {
  const url =
    "https://webshopproducts-c1673-default-rtdb.firebaseio.com/products/alaplapok.json";
  const title = "Alaplapok";
  const description =
    "Az alaplap biztosítja az egyes számítógép komponensek közötti együttműködést. Eszközei fontosak, tekintettel a jövőbeni PC-bővítések lehetőségeire. Az alaplap, vagy inkább a számítógép alapvető szolgáltatásait az alaplapra szerelt lapkakészlet határozza meg.";
  return (
    <div>
      <Products url={url} title={title} description={description}></Products>
    </div>
  );
}

export default Alaplapok;
