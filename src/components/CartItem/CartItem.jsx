import style from "./CartItem.module.css";

const CartItem = ({
  prod,
  quantity,
  prodTotalPrice,
  onAddHandler,
  onDecreaseHandler,
}) => {
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
          <button className="minus-btn" onClick={() => onDecreaseHandler(id)}>
            ➖
          </button>
          <p className="quantity">{quantity}</p>
          <button className="plus-btn" onClick={() => onAddHandler(id)}>
            ➕
          </button>
        </div>
      }
    </div>
  );
};

export default CartItem;
