import { useSelector } from "react-redux";

export const useCart = () => {
  const cart = useSelector((state) => state.cart.cart);

  const cartArr = [];
  const cartQuantity = [];

  cart.map(
    (el) => cartArr.push(el.product.id) && cartQuantity.push(el.quantity)
  );

  return {
    cartArr,
    cartQuantity,
  };
};
