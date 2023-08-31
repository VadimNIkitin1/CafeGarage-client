import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = ({
  className,
  prod,
  cart,
  onAddHandler,
  onDecreaseHandler,
}) => {
  const { name, price, id, image } = prod;

  return (
    <div className={"product"}>
      <img className={"img"} src={image} />
      <div className={"title_desc"}>
        <div className={"title"}>{name}</div>
        <Link to={`/products/${id}`} className={"description"}>
          Подробнее...
        </Link>
      </div>
      <div className={"purchase"}>
        <span className={"price"}>{price} руб</span>
        {cart[id] === undefined ? (
          <button className={"add-btn"} onClick={() => onAddHandler(id)}>
            Добавить
          </button>
        ) : (
          <div className="quantity-buttons">
            <button className="minus-btn" onClick={() => onDecreaseHandler(id)}>
              ➖
            </button>
            <p className="quantity">{cart[id - 1].quantity}</p>
            <button className="plus-btn" onClick={() => onAddHandler(id)}>
              ➕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
