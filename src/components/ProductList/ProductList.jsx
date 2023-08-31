import ProductListElement from "../ProductListElement/ProductListElement ";
import "./ProductList.css";

const ProductList = ({
  onAddHandler,
  onDecreaseHandler,
  cart,
  categories,
  products,
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
        />
      ))}
    </div>
  );
};

export default ProductList;
