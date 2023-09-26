import { Link } from "react-router-dom";
import style from "./ProductItem.module.css";
import { contains } from "../../utils/contains";
import { onAddProduct } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { Context } from "../../Pages/HomePage";
import AddButton from "../../UI/AddButton/AddButton";

import Counter from "../../UI/Counter/Counter";

const ProductItem = ({ prod }) => {
  const { cartArr, cartQuantity } = useContext(Context);

  const dispatch = useDispatch();
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
          <Counter id={id}>{cartQuantity[cartArr.indexOf(id)]}</Counter>
        ) : (
          <AddButton onClick={() => dispatch(onAddProduct(id))}>
            Добавить
          </AddButton>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
