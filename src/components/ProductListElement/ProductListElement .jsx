import { useState, useEffect, useRef, useContext, forwardRef } from "react";
import { getProducts } from "../../services/services.js";
import ProductItem from "../ProductItem/ProductItem.jsx";
import "./ProductListElement.css";
import { RefContext } from "../../App.jsx";

const ProductListElement = forwardRef(({ categoryName, categoryId }, ref) => {
  const [products, setProducts] = useState([]);
  const { value, setValue } = useContext(RefContext);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const filterProd = products.filter((prod) => prod.categoryId === categoryId);

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
});

export default ProductListElement;
