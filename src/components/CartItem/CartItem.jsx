import style from "./CartItem.module.css";
import { onDecreaseProduct, onAddProduct } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ prod, quantity, prodTotalPrice }) => {
  const dispatch = useDispatch();
  const { name, price, id, webp_image_url } = prod;

  return (
    <div className={style.CartItem}>
      <img src={webp_image_url} alt="webp_image_url" className={style.image} />
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
