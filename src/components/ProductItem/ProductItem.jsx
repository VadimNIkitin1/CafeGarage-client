import { Link } from "react-router-dom";
import "./ProductItem.css";
import { addToCart, decreaseProduct } from "../../services/services";
import { useState } from "react";

const ProductItem = ({ className, prod }) => {
  const [quantity, setQuantity] = useState(0);

  const { name, price, id, image } = prod;

  const onAddHandler = async (id) => {
    setQuantity((prev) => prev + 1);
    await addToCart(id).then((data) => console.log(data));
  };

  const onDecreaseHandler = async (id) => {
    setQuantity((prev) => prev - 1);
    await decreaseProduct(id).then((data) => console.log(data));
  };

  return (
    <div className={"product " + className}>
      <img className={"img"} src={image} />
      <div className={"title_desc"}>
        <div className={"title"}>{name}</div>
        <Link to={`/products/${id}`} className={"description"}>
          Подробнее...
        </Link>
      </div>
      <div className={"purchase"}>
        <span className={"price"}>{price} руб</span>
        {quantity === 0 ? (
          <button className={"add-btn"} onClick={() => onAddHandler(id)}>
            Добавить
          </button>
        ) : (
          <div className="quantity-buttons">
            <button className="minus-btn" onClick={() => onDecreaseHandler(id)}>
              ➖
            </button>
            <p className="quantity">{quantity}</p>
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
