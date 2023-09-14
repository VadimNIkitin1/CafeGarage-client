import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderList from "../components/OrderList/OrderList";

import { useTelegram } from "../hooks/useTelegram";

import { fetchCart, fetchTotalPrice } from "../store/cartSlice";

const FormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quantity = useSelector((state) => state.cart.quantity);
  const { tg } = useTelegram();

  const goToForm = () => {
    navigate("/form");
  };

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchTotalPrice());
  }, [quantity]);

  tg.BackButton.show();

  const goBack = () => {
    tg.MainButton.onClick(goToForm);
    navigate("/");
  };

  tg.BackButton.onClick(goBack);

  return (
    <div>
      <OrderList />
    </div>
  );
};

export default FormPage;
