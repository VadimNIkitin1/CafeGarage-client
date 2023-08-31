import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderList from "../components/OrderList/OrderList";
import { useTelegram } from "../hooks/useTelegram";
import { getCartTotalPrice } from "../services/services";

const FormPage = () => {
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getCartTotalPrice().then((data) => setTotalPrice(data.total_price));
  }, []);

  tg.BackButton.show();

  const goBack = () => {
    navigate(-1);
  };

  tg.onEvent("backButtonClicked", goBack);

  return (
    <div>
      <OrderList totalPrice={totalPrice} />
    </div>
  );
};

export default FormPage;
