import { Link } from "react-router-dom";
import "./ProductItem.css";
import { addToCart } from "../../services/services";

const ProductItem = ({ className, prod }) => {
  const { name, price, id, image } = prod;

  const onAddHandler = (id) => {
    addToCart(id).then((data) => console.log(data));
  };

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
        <button className={"add-btn"} onClick={() => onAddHandler(id)}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
