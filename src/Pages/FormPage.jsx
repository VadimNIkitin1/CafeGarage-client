import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrderList from "../components/OrderList/OrderList";

import { fetchCart, fetchTotalPrice } from "../store/cartSlice";

const FormPage = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchTotalPrice());
  }, [quantity]);

  return (
    <div>
      <OrderList />
    </div>
  );
};

export default FormPage;
