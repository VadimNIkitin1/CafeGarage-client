import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ProductItem.css";

const ProductItem = ({ className, onAdd, prod }) => {
  const { name, price, id, image } = prod;

  // const onAddHandler = () => {
  //   onAdd(product);
  // };

  return (
    <div className={"product " + className}>
      <img className={"img"} src={image} />
      <div className={"title_desc"}>
        <div className={"title"}>{name}</div>
        <Link to={`/products/${id}`} className={"description"}>
          Подробнее...
        </Link>
      </div>
      <div className={"purchase"}>
        <span className={"price"}>{price} RUB</span>
        <Button className={"add-btn"}>Добавить</Button>
      </div>
    </div>
  );
};

export default ProductItem;
