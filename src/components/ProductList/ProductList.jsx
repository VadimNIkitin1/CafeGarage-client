import ProductListElement from "../ProductListElement/ProductListElement ";
import "./ProductList.css";
import { useSelector } from "react-redux";
import { useTelegram } from "../../hooks/useTelegram";

const ProductList = () => {
  const categories = useSelector((state) => state.categories.categories);
  const { tg } = useTelegram();

  return (
    <div className={"product-list"}>
      <p>{tg.initDataUnsafe.first_name}</p>
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
