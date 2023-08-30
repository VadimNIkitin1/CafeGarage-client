import style from "./OrderList.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import {
  clearCart,
  getCart,
  getCartTotalPrice,
} from "./../../services/services";
import OrderForm from "../OrderForm/OrderForm";
import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const [totalPrice, setTotalPrice] = useState({});
  const navigate = useNavigate();

  const clearCartHandler = () => {
    clearCart().then((data) => console.log(data));
    navigate("/");
  };

  useEffect(() => {
    getCart().then((data) => setOrderList(data));
  }, []);

  useEffect(() => {
    getCartTotalPrice().then((data) => setTotalPrice(data));
  }, []);

  return (
    <div className={style.orderListContainer}>
      <div className={style.orderTitle}>
        <h1>Ваш заказ</h1>
        <button className={style.trashBtn} onClick={() => clearCartHandler()}>
          <BsFillTrashFill />
        </button>
      </div>
      <div>
        {!orderList.length ? (
          <h2>Список пуст...</h2>
        ) : (
          orderList.map((prod) => (
            <ProductItem
              prod={prod.product}
              quantity={prod.quantity}
              key={prod.product.id}
            />
          ))
        )}
      </div>
      <h4 className={style.deliveryText}>
        Доставка {totalPrice.total_price < 800 ? "249р" : "бесплатно"}
      </h4>
      <OrderForm />
    </div>
  );
};

export default OrderList;
