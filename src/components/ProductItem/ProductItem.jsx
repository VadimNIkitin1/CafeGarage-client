import { Link } from "react-router-dom";
import "./ProductItem.css";
import { contains } from "../../utils/contains";
import { onDecreaseProduct, onAddProduct } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { Context } from "../../Pages/HomePage";
import AddButton from "../../UI/addButton/addButton";
import PlusButton from "../../UI/PlusButton/PlusButton";
import MinusButton from "../../UI/MinusButton/MinusButton";
import Counter from "../../UI/Counter/Counter";

const ProductItem = ({ prod }) => {
  const { cartArr, cartQuantity } = useContext(Context);

  const dispatch = useDispatch();
  const { name, price, id, webp_image_url } = prod;

  return (
    <div className={"product"}>
      <img className={"img"} src={webp_image_url} />
      <div className={"title_desc"}>
        <div className={"title"}>{name}</div>
        <Link to={`/products/${id}`} className={"description"}>
          Подробнее...
        </Link>
      </div>
      <div className={"purchase"}>
        <span className={"price"}>{price} руб</span>
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
