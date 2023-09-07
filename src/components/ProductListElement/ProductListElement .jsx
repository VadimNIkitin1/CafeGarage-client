import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem.jsx";
import "./ProductListElement.css";

const ProductListElement = ({
  categoryName,
  categoryId,
  cartArr,
  cartQuantity,
}) => {
  const products = useSelector((state) => state.products.products);
  const filterProd = products.filter((prod) => prod.category === categoryId);

  return (
    <div className={"list-element"}>
      <h3 id={`${categoryName}`} className={"category-name"}>
        {categoryName}
      </h3>
      {filterProd.map((prod) => (
        <ProductItem
          prod={prod}
          key={prod.id}
          cartArr={cartArr}
          cartQuantity={cartQuantity}
        />
      ))}
    </div>
  );
};

export default ProductListElement;
