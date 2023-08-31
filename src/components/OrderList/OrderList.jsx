import style from "./OrderList.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { clearCart, getCart } from "./../../services/services";
import OrderForm from "../OrderForm/OrderForm";
import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";

const OrderList = ({ totalPrice }) => {
  const [orderList, setOrderList] = useState([]);
  const navigate = useNavigate();

  const clearCartHandler = () => {
    clearCart().then((data) => console.log(data));
    navigate("/");
  };

  useEffect(() => {
    getCart().then((data) => setOrderList(data));
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
            <ProductItem prod={prod.product} key={prod.product.id} />
          ))
        )}
      </div>
      <h3>Заказ на сумму {totalPrice} руб</h3>
      <h4 className={style.deliveryText}>
        Доставка {totalPrice < 800 ? "249р" : "бесплатно"}
      </h4>
      <OrderForm />
    </div>
  );
};

export default OrderList;
