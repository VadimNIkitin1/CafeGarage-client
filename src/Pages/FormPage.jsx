import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderList from "../components/OrderList/OrderList";

import { useTelegram } from "../hooks/useTelegram";

import { fetchCart, fetchTotalPrice } from "../store/cartSlice";

const FormPage = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const { tg } = useTelegram();

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchTotalPrice());
  }, [quantity]);

  tg.BackButton.show();

  const goBack = () => {
    navigate(-1);
  };

  tg.onEvent("backButtonClicked", goBack);

  return (
    <div>
      <OrderList />
    </div>
  );
};

export default FormPage;
