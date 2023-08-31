import ProductListElement from "../ProductListElement/ProductListElement ";
import "./ProductList.css";

const ProductList = ({
  onAddHandler,
  onDecreaseHandler,
  cart,
  categories,
  products,
  cartArr,
  cartQuantity,
}) => {
  return (
    <div className={"product-list"}>
      {categories.map((category) => (
        <ProductListElement
          key={category.id}
          categoryName={category.name}
          categoryId={category.id}
          onAddHandler={onAddHandler}
          onDecreaseHandler={onDecreaseHandler}
          cart={cart}
          products={products}
          cartArr={cartArr}
          cartQuantity={cartQuantity}
        />
      ))}
    </div>
  );
};

export default ProductList;
