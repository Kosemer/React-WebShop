import { useEffect, useState, useContext, useMemo } from "react";
import ProductDetail from "../../Pages/ProductDetail";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem/ProductItem";
import CartContext from "../../Store/cart-context";
import ProductBox from "./ProductItem/ProductBox";

const AvailableProducts = (props) => {


  const cartCtx = useContext(CartContext);

  const { url } = props; // Az adott komponens (Pages) elküldi a saját url-jét.
  const [products, setProducts] = useState([]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  ///
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [noResults, setNoResults] = useState(false);

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
          parentId: responseData[key].parentId,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
          //processor: responseData[key].processor,
          //memory: responseData[key].memory,
          //connectivity: responseData[key].connectivity
        });
      }
      setProducts(loadedProducts);
      if (loadedProducts.length > 0) {
        cartCtx.setParentId(loadedProducts[0].parentId);
      }
    };
    fetchProducts();
  }, [url]);



  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOrder === "asc") {
          return a.price - b.price;
        } else if (sortOrder === "desc") {
          return b.price - a.price;
        } else {
          return 0;
        }
      });
  }, [products, searchTerm, sortOrder]);

  const productsList = (
    <section className={classes.popularProducts}>
      {filteredAndSortedProducts.map((item) => (
        <ProductBox
          key={item.id}
          id={item.id}
          parentId={item.parentId}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          processor={item.processor}
        />
      ))}
    </section>
  );


  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  useEffect(() => {
    setNoResults(filteredAndSortedProducts.length === 0 && !loadingSpinner);
  }, [filteredAndSortedProducts, loadingSpinner]);

  return (
    <div>
      {loadingSpinner && <LoadingSpinner></LoadingSpinner>}
      <section className={classes.products}>

        <Card  padding="0rem">
          {/*category description */}
          <div className={classes.categoryDescription}>
            <h2 className={classes.title}>{props.title}</h2>
            <p className={classes.description}>{props.description}</p>
          </div>
          {/*category description END */}
          <div className={classes.filterWrapper}>
          <div className={classes.filterBar}>
            <div className={classes.searchBar}>
              <input
                type="text"
                placeholder="Keresés..."
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
            </div>
            <div className={classes.sortBy}>
              {/*<label htmlFor="sortOrder">Rendezés: </label>*/}
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={handleSortOrderChange}
              >
                <option value="">Rendezés</option>
                <option value="asc">Ár szerint csökkenő</option>
                <option value="desc">Ár szerint növekvő</option>
              </select>
            </div>
            <div className={classes.productCount}>
              Összesen {filteredAndSortedProducts.length} termék.
            </div>
          </div>
          </div>
          {noResults ? (
            <Card>
              <div className={classes.noResults}>Nincs ilyen termék!</div>
            </Card>
          ) : (
            productsList
          )}
        </Card>


        <ProductDetail products={products}></ProductDetail>
      </section>
    </div>
  );
};

export default AvailableProducts;
