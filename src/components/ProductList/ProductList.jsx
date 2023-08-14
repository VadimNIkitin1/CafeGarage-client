import { useEffect, useState, useContext, useRef, forwardRef } from "react";
import { getCategories } from "../../services/services.js";
import ProductListElement from "../ProductListElement/ProductListElement ";
import "./ProductList.css";
import { categories } from "../../mockDB/index.js";

const ProductList = () => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   getCategories().then((data) => setCategories(data));
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
