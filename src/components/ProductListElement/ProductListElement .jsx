import { getProducts } from "../../services/services.js";
import ProductItem from "../ProductItem/ProductItem.jsx";
import "./ProductListElement.css";
import { useEffect, useState } from "react";

const ProductListElement = ({
  categoryName,
  categoryId,
  onAddHandler,
  onDecreaseHandler,
  cart,
  products,
}) => {
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
          cart={cart}
          onAddHandler={onAddHandler}
          onDecreaseHandler={onDecreaseHandler}
        />
      ))}
    </div>
  );
};

export default ProductListElement;
