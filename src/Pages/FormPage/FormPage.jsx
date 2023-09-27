import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderList from "../../components/OrderList/OrderList";

import { useTelegram } from "../../hooks/useTelegram";

import { fetchCart, fetchTotalPrice } from "../../store/cartSlice";
import { useGoBack } from "../../hooks/useGoBack";

const FormPage = () => {
  const dispatch = useDispatch();
  const { goBack } = useGoBack();
  const { onToggleBackButton } = useTelegram();

  const quantity = useSelector((state) => state.cart.quantity);

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
