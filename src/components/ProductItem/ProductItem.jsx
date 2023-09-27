import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCart } from "../../hooks/useCart";
import { contains } from "../../utils/contains";
import { onAddProduct } from "../../store/cartSlice";
import AddButton from "../../UI/AddButton/AddButton";
import Counter from "../../UI/Counter/Counter";

import style from "./ProductItem.module.css";

const ProductItem = ({ prod }) => {
  const dispatch = useDispatch();
  const { cartArr, cartQuantity } = useCart();

  const { name, price, id, webp_image_url } = prod;

  return (
    <div className={style.product}>
      <img className={style.img} src={webp_image_url} />
      <div className={style.titleDesc}>
        <div className={style.title}>{name}</div>
        <Link to={`/products/${id}`} className={style.description}>
          Подробнее...
        </Link>
      </div>
      <div className={style.purchase}>
        <span className={style.price}>{price} руб</span>
        {contains(cartArr, id) ? (
          <div className={style.counterContainer}>
            <Counter id={id}>{cartQuantity[cartArr.indexOf(id)]}</Counter>
          </div>
        ) : (
          <div className={style.addButtonContainer}>
            <AddButton onClick={() => dispatch(onAddProduct(id))}>
              Добавить
            </AddButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
