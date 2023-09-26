import ProductListElement from "../ProductListElement/ProductListElement ";
import { useSelector } from "react-redux";

import style from "./ProductList.module.css";

const ProductList = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className={style.productList}>
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
