import { useEffect, useState } from "react";
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


const AvailableProducts =  () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://webshopproducts-c1673-default-rtdb.firebaseio.com/products/videokartyak.json')
      const responseData = await response.json()
      
      const loadedProducts = [];
    
      for(const key in responseData){
        loadedProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
          processor: responseData[key].processor
        })
      }
      setProducts(loadedProducts)
      console.log(loadedProducts)
    }
    fetchProducts()
  }, [])

  const productsList = products.map((item) => (
    <ProductItem
      id={item.id}
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      image={item.image}
      processor={item.processor}
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
