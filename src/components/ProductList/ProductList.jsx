import ProductListElement from "../ProductListElement/ProductListElement ";
import "./ProductList.css";
import { useSelector } from "react-redux";

const ProductList = () => {
  const categories = useSelector((state) => state.categories.categories);

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
