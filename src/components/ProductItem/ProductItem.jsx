import { Link } from "react-router-dom";
import "./ProductItem.css";
import { contains } from "../../utils/contains";

const ProductItem = ({
  prod,
  cart,
  onAddHandler,
  onDecreaseHandler,
  cartArr,
  cartQuantity,
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
        {contains(cartArr, id) ? (
          <div className="quantity-buttons">
            <button className="minus-btn" onClick={() => onDecreaseHandler(id)}>
              ➖
            </button>
            <p className="quantity">{cartQuantity[cartArr.indexOf(id)]}</p>
            <button className="plus-btn" onClick={() => onAddHandler(id)}>
              ➕
            </button>
          </div>
        ) : (
          <button className={"add-btn"} onClick={() => onAddHandler(id)}>
            Добавить
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
