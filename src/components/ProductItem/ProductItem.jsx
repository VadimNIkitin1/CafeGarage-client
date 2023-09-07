import { Link } from "react-router-dom";
import "./ProductItem.css";
import { contains } from "../../utils/contains";
import { onDecreaseProduct, onAddProduct } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { Context } from "../../Pages/HomePage";

const ProductItem = ({ prod }) => {
  const { cartArr, cartQuantity } = useContext(Context);

  const dispatch = useDispatch();
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
            <button
              className="minus-btn"
              onClick={() => dispatch(onDecreaseProduct(id))}
            >
              ➖
            </button>
            <p className="quantity">{cartQuantity[cartArr.indexOf(id)]}</p>
            <button
              className="plus-btn"
              onClick={() => dispatch(onAddProduct(id))}
            >
              ➕
            </button>
          </div>
        ) : (
          <button
            className={"add-btn"}
            onClick={() => dispatch(onAddProduct(id))}
          >
            Добавить
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
