import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem.jsx";
import "./ProductListElement.css";

const ProductListElement = ({ categoryName, categoryId }) => {
  const products = useSelector((state) => state.products.products);
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
