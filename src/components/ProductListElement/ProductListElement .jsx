import ProductItem from "../ProductItem/ProductItem.jsx";
import "./ProductListElement.css";

const ProductListElement = ({
  categoryName,
  categoryId,
  onAddHandler,
  onDecreaseHandler,
  cart,
  products,
  cartArr,
  cartQuantity,
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
          cartArr={cartArr}
          cartQuantity={cartQuantity}
        />
      ))}
    </div>
  );
};

export default ProductListElement;
