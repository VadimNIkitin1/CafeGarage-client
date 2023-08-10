import { useState, useEffect } from "react";
import { getProducts } from "../../services/services.js";
import ProductItem from "../ProductItem/ProductItem.jsx";
import "./ProductListElement.css";

const ProductListElement = ({ categoryName, categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const filterProd = products.filter((prod) => prod.categoryId === categoryId);

  return (
    <div>
      <h3 className={"category-name"}>{categoryName}</h3>
      {filterProd.map((prod) => (
        <ProductItem prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ProductListElement;
