import { useNavigate, useParams } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/productsSlice";
import { fetchCart } from "../../store/cartSlice";
import { onAddProduct } from "../../store/cartSlice";
import AddButton from "../../UI/AddButton/AddButton";

import style from "./ProductPage.module.css";

import Counter from "../../UI/Counter/Counter";

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

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);

  useEffect(() => {
    dispatch(fetchCart());
  }, [quantity]);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    tg.BackButton.show();
    tg.BackButton.onClick(goBack);
    return () => {
      tg.BackButton.offClick(goBack);
    };
  }, []);

  return (
    <div className={style.productPage}>
      <img className={style.img} src={webp_image_url} />
      <h1 className={style.name}>{name}</h1>
      <i className={style.description}>{description}</i>
      <div>
        {targetProd.length > 0 ? (
          <div className={style.counterContainer}>
            <Counter id={id}>{targetProd[0].quantity}</Counter>
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

export default ProductPage;
