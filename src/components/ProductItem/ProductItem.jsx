import Button from "../Button/Button";
import "./ProductItem.css";

const ProductItem = ({ className, onAdd, product }) => {
  const { name, price, description, imagePath } = product;

  // const onAddHandler = () => {
  //   onAdd(product);
  // };

  return (
    <div className={"product " + className}>
      <img className={"img"} src={`http://localhost:4200/${imagePath}`} />
      <div className={"title_desc"}>
        <div className={"title"}>{name}</div>
        <div className={"description"}>{description}</div>
      </div>
      <div className={"purchase"}>
        <span className={"price"}>{price} RUB</span>
        <Button className={"add-btn"}>Добавить</Button>
      </div>
    </div>
  );
};

export default ProductItem;
