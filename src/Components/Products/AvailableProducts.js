import Card from "../UI/Card";
import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem/ProductItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvailableProducts() {
  const productsList = DUMMY_MEALS.map((item) => (
    <ProductItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    ></ProductItem>
  ));
  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableProducts;
