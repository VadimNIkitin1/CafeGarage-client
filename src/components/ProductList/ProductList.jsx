import { useEffect, useState, useContext, useRef, forwardRef } from "react";
import { getCategories } from "../../services/services.js";
import ProductListElement from "../ProductListElement/ProductListElement ";
import "./ProductList.css";
// import { categories } from "../../mockDB/index.js";
// import { getQuantityById } from "../../services/services.js";

const ProductList = () => {
  const [categories, setCategories] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  // useEffect(() => {
  //   getQuantityById(1).then((data) => console.log(data));
  // }, []);

  return (
    <div className={"product-list"}>
      {categories.map((category) => (
        <ProductListElement
          key={category.id}
          categoryName={category.name}
          categoryId={category.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
