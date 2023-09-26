import { useNavigate, useParams } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/productsSlice";
import { fetchCart } from "../../store/cartSlice";
import { onDecreaseProduct, onAddProduct } from "../../store/cartSlice";

import style from "./ProductPage.module.css";

const ProductPage = () => {
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const { id } = useParams();
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const product = useSelector((state) => state.products.product);
  const cart = useSelector((state) => state.cart.cart);

  const { description, name, webp_image_url } = product;

  const targetProd = cart.filter((prod) => prod.product.id === Number(id));

  tg.BackButton.show();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);

  useEffect(() => {
    dispatch(fetchCart());
  }, [quantity]);

  const goBack = () => {
    navigate(-1);
  };
  tg.onEvent("backButtonClicked", goBack);

  return (
    <div className={style.productPage}>
      <img className={style.img} src={webp_image_url} />
      <h1 className={style.name}>{name}</h1>
      <i className={style.description}>{description}</i>
      <div>
        {targetProd.length > 0 ? (
          <div className={style.quantityButtons}>
            <button
              className={style.minusBtn}
              onClick={() => dispatch(onDecreaseProduct(id))}
            >
              ➖
            </button>
            <p className={style.quantity}>{targetProd[0].quantity}</p>
            <button
              className={style.plusBtn}
              onClick={() => dispatch(onAddProduct(id))}
            >
              ➕
            </button>
          </div>
        ) : (
          <button
            className={style.addBtn}
            onClick={() => dispatch(onAddProduct(id))}
          >
            Добавить
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
