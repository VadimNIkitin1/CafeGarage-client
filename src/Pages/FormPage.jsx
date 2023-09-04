import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderList from "../components/OrderList/OrderList";
import { useTelegram } from "../hooks/useTelegram";
import {
  getCartTotalPrice,
  getCart,
  addToCart,
  decreaseProduct,
  clearCart,
} from "../services/services";

const FormPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { tg } = useTelegram();
  const navigate = useNavigate();

  const clearCartHandler = () => {
    clearCart().then((data) => console.log(data));
    navigate(-1);
  };

  useEffect(() => {
    getCart().then((data) => setCart(data));
  }, [quantity]);

  useEffect(() => {
    getCartTotalPrice().then((data) => setTotalPrice(data.total_price));
  }, [quantity]);

  const onAddHandler = async (id) => {
    await addToCart(id).then((data) => console.log(data));
    setQuantity((prev) => prev + 1);
    getCartTotalPrice().then((data) => console.log(data.total_price));
  };

  const onDecreaseHandler = async (id) => {
    await decreaseProduct(id).then((data) => console.log(data));
    setQuantity((prev) => prev - 1);
    getCartTotalPrice().then((data) => console.log(data.total_price));
  };

  tg.BackButton.show();
  tg.MainButton.hide();

  const goBack = () => {
    navigate(-1);
  };

  tg.onEvent("backButtonClicked", goBack);

  return (
    <div>
      <OrderList
        totalPrice={totalPrice}
        clearCartHandler={clearCartHandler}
        cart={cart}
        onAddHandler={onAddHandler}
        onDecreaseHandler={onDecreaseHandler}
      />
    </div>
  );
};

export default FormPage;
