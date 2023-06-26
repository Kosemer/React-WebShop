import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductDetailLayout from "../Components/UI/ProductDetailLayout";
import Card from "../Components/UI/Card";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Firebase konfiguráció
const firebaseConfig = {
  apiKey: "AIzaSyA9I3pmY-2rE2GekX7A3angjr9GI8Gc-3U",
  authDomain: "webshopproducts-c1673.firebaseapp.com",
  databaseURL: "https://webshopproducts-c1673-default-rtdb.firebaseio.com",
  projectId: "webshopproducts-c1673",
  storageBucket: "webshopproducts-c1673.appspot.com",
  messagingSenderId: "299385041421",
  appId: "1:299385041421:web:f8fbc0b3be8c0d016a1b44"
};

// Firebase SDK inicializálása a konfigurációval
const app = initializeApp(firebaseConfig);

function ProductDetail(props) {
  const params = useParams();
  const [product, setProduct] = useState(null);

  console.log(props.parentId)

  useEffect(() => {
    const fetchProduct = async () => {
      const database = getDatabase(app);
      const productRef = ref(database, `products/${props.parentId}/${params.productId}`);
      const snapshot = await get(productRef);
      console.log(snapshot)
      const loadedProduct = snapshot.val();
      console.log(loadedProduct)  /// ITT MÁR NEM JÓ
      if (loadedProduct) {
        setProduct({
          id: params.productId,
          name: loadedProduct.name,
          description: loadedProduct.description,
          price: loadedProduct.price,
          image: loadedProduct.image,
          processor: loadedProduct.processor,
          memory: loadedProduct.memory,
          connectivity: loadedProduct.connectivity,
        });
      }
    };
    fetchProduct();
  }, [params.parentId, params.productId]);



  if (!product) {
    return <div></div>;
  }

  return (
    <Card>
      <ProductDetailLayout
        name={product.name}
        image={product.image}
        description={product.description}
        processor={product.processor}
        price={product.price}
        memory={product.memory}
        connectivity={product.connectivity}
      ></ProductDetailLayout>
    </Card>
  );
}

export default ProductDetail;
