import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderList from "../../components/OrderList/OrderList";

import { useTelegram } from "../../hooks/useTelegram";

import { fetchCart, fetchTotalPrice } from "../../store/cartSlice";

const FormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quantity = useSelector((state) => state.cart.quantity);

  const { tg } = useTelegram();

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchTotalPrice());
  }, [quantity]);

  const goBack = () => {
    navigate("/");
  };

  tg.BackButton.show();

  useEffect(() => {
    tg.BackButton.onClick(goBack);
    return () => {
      tg.BackButton.offClick(goBack);
    };
  }, []);

  return (
    <div>
      <OrderList />
    </div>
  );
};

export default FormPage;
