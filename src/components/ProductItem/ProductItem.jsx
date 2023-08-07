import Button from "../Button/Button";
import "./ProductItem.css";

const ProductItem = ({ product, className, onAdd, item }) => {
  console.log(item);
  const { name, price, description, imagePath } = item;
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className={"product " + className}>
      <img className={"img"} />
      <div className={"title_desc"}>
        <div className={"title"}>{name}</div>
        <div className={"description"}>{description}</div>
      </div>
      <div className={"purchase"}>
        <span className={"price"}>{price} RUB</span>
        <Button className={"add-btn"} onClick={onAddHandler}>
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
