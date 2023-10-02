import { useSelector } from "react-redux";

export const useCart = (id) => {
  const cart = useSelector((state) => state.cart.cart);

  const cartArr = [];
  const cartQuantity = [];

  cart.map(
    (el) => cartArr.push(el.product.id) && cartQuantity.push(el.quantity)
  );

  const targetProd = cart.filter((prod) => prod.product.id === Number(id));

  return {
    cartArr,
    cartQuantity,
    targetProd,
  };
};
