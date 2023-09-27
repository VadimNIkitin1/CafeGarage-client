import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderList from "../../components/OrderList/OrderList";

import { useTelegram } from "../../hooks/useTelegram";
import { useCustomNavigate } from "../../hooks/useCustomNavigate";

import { fetchCart, fetchTotalPrice } from "../../store/cartSlice";

const FormPage = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const { goBack } = useCustomNavigate();
  const { onToggleBackButton } = useTelegram();

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchTotalPrice());
  }, [quantity]);

  onToggleBackButton(goBack);

  return (
    <div>
      <OrderList />
    </div>
  );
};

export default FormPage;
