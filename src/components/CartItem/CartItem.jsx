import style from "./CartItem.module.css";
import Counter from "../../UI/Counter/Counter";
import { textCut } from "../../utils/textCut";

const CartItem = ({ prod, quantity, prodTotalPrice }) => {
  const { name, price, id, webp_image_url } = prod;

  return (
    <div className={style.CartItem}>
      <img src={webp_image_url} alt="webp_image_url" className={style.image} />
      <p className={style.name}>
        {textCut(name, 30)}
        <br />
        {price} руб
        <br />
        Итог {prodTotalPrice}
      </p>
      <div style={{ width: "100px", height: "40px" }}>
        <Counter id={id}>{quantity}</Counter>
      </div>
    </div>
  );
};

export default CartItem;
