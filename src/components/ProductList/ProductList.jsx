import { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import CategoriesList from "../CategoriesList/CategoriesList";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("http://localhost:4200/api/products");
    const data = await res.json();
    return setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <CategoriesList />
      {products.map((product) => (
        <ProductItem key={product.name} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
