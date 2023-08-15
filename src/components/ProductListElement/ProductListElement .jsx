import { useState, useEffect } from "react";
import { getProducts } from "../../services/services.js";
import ProductItem from "../ProductItem/ProductItem.jsx";
import "./ProductListElement.css";
// import { products } from "../../mockDB/index.js";

const ProductListElement = ({ categoryName, categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const filterProd = products.filter((prod) => prod.category === categoryId);

  return (
    <div className={"list-element"}>
      <h3 id={`${categoryName}`} className={"category-name"}>
        {categoryName}
      </h3>
      {filterProd.map((prod) => (
        <ProductItem prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ProductListElement;
