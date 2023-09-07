import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderList from "../components/OrderList/OrderList";

import { useTelegram } from "../hooks/useTelegram";

import { fetchCart, fetchTotalPrice } from "../store/cartSlice";

const FormPage = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart.cart);

  const { tg } = useTelegram();

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchTotalPrice());
  }, [quantity]);

  tg.BackButton.show();
  tg.MainButton.hide();

  tg.onEvent("backButtonClicked", () => navigate(-1));

  return (
    <div>
      <OrderList cart={cart} />
    </div>
  );
};

export default FormPage;
