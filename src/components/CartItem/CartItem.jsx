import style from "./CartItem.module.css";
import { onDecreaseProduct, onAddProduct } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ prod, quantity, prodTotalPrice }) => {
  const dispatch = useDispatch();
  const { image, name, price, id } = prod;

  return (
    <div className={style.CartItem}>
      <img src={image} alt="image" className={style.image} />
      <p className={style.name}>
        {name}
        <br />
        {price} руб
        <br />
        Итог {prodTotalPrice}
      </p>
      {
        <div className="quantity-buttons">
          <button
            className="minus-btn"
            onClick={() => dispatch(onDecreaseProduct(id))}
          >
            ➖
          </button>
          <p className="quantity">{quantity}</p>
          <button
            className="plus-btn"
            onClick={() => dispatch(onAddProduct(id))}
          >
            ➕
          </button>
        </div>
      }
    </div>
  );
};

export default CartItem;
