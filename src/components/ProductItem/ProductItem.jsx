import Button from "../Button/Button";
import "./ProductItem.css";

const ProductItem = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className={"product " + className}>
      <div className={"img"} />
      <div className={"title_desc"}>
        <div className={"title"}>Product</div>
        <div className={"description"}>Product Desc</div>
      </div>
      <div className={"purchase"}>
        <span className={"price"}>110 RUB</span>
        <Button className={"add-btn"} onClick={onAddHandler}>
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
