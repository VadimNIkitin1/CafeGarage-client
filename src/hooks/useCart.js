import { useDispatch, useSelector } from "react-redux";
import { useCustomNavigate } from "./useCustomNavigate";
import { onClearCart } from "../store/cartSlice";

export const useCart = (id) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { goBack } = useCustomNavigate();

  const cartArr = [];
  const cartQuantity = [];

  cart.map(
    (el) => cartArr.push(el.product.id) && cartQuantity.push(el.quantity)
  );

  const targetProd = cart.filter((prod) => prod.product.id === Number(id));

  const onClear = async () => {
    await dispatch(onClearCart());
    goBack();
  };

  return {
    cartArr,
    cartQuantity,
    targetProd,
    onClear,
  };
};
