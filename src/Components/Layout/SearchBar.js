import { useState, useEffect } from "react";
import ProductDetailLayout from "../UI/ProductDetailLayout";
import Card from "../UI/Card";
import ProductItem from "../Products/ProductItem/ProductItem";
import classes from '../Products/AvailableProducts.module.css'
import LoadingSpinner from "../UI/LoadingSpinner";
import ProductDetail from "../../Pages/ProductDetail";

function SearchBar(props) {
  const url =
  "https://webshopproducts-c1673-default-rtdb.firebaseio.com/products.json";
  const [products, setProducts] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  ///
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false); // új állapot

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingSpinner(true);
      const response = await fetch(url);
      const responseData = await response.json();
      setLoadingSpinner(false);
      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
          processor: responseData[key].processor,
        });
      }
      setProducts(loadedProducts);
    };
    fetchProducts();
  }, [url]);

  const productsList = products
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((item) => (
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

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  useEffect(() => {
    if (productsList.length === 0 && !loadingSpinner) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  }, [productsList, loadingSpinner]);

  return (
    <div>
    {loadingSpinner && <LoadingSpinner></LoadingSpinner>}
    <section className={classes.products}>
      {noResults ? (
        <Card>
          <div className={classes.noResults}>Nincs ilyen termék!</div>
        </Card>
      ) : (
        <Card>
          <div className={classes.filterBar}>
            <div className={classes.searchBar}>
              <input
                type="text"
                placeholder="Keresés..."
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
            </div>
          </div>
          <div className={classes.productCount}>
            Összesen {productsList.length} termék.
          </div>
          <ul className={classes.productsList}>{productsList}</ul>
        </Card>
      )}

      <ProductDetail products={products}></ProductDetail>
    </section>
  </div>
  );
}

export default SearchBar;
