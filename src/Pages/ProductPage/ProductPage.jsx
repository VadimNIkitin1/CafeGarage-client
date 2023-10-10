import { useParams } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import { useCustomNavigate } from "../../hooks/useCustomNavigate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/productsSlice";
import { fetchCart } from "../../store/cartSlice";
import { onAddProduct } from "../../store/cartSlice";
import AddButton from "../../UI/AddButton/AddButton";

import style from "./ProductPage.module.css";

import Counter from "../../UI/Counter/Counter";
import { useCart } from "../../hooks/useCart";

const ProductPage = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const product = useSelector((state) => state.products.product);
  const { id } = useParams();
  const { onToggleBackButton, initData1 } = useTelegram();
  const { goBack } = useCustomNavigate();
  const { targetProd } = useCart(id);

  console.log(initData1);

  const { description, name, webp_image_url } = product;

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);

  useEffect(() => {
    dispatch(fetchCart());
  }, [quantity]);

  onToggleBackButton(goBack);

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
            <AddButton
              onClick={() => dispatch(onAddProduct(id))}
              text={"Добавить"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
