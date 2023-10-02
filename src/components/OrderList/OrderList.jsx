import { useSelector } from "react-redux";

import OrderForm from "../OrderForm/OrderForm";
import CartItem from "../CartItem/CartItem";

import style from "./OrderList.module.css";
import TrashButton from "../../UI/TrashButton/TrashButton";
import { useCart } from "../../hooks/useCart";

const OrderList = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cart = useSelector((state) => state.cart.cart);
  const { onClear } = useCart();

  return (
    <div className={style.orderListContainer}>
      <div className={style.orderTitle}>
        <h1>Ваш заказ</h1>
        <TrashButton onClick={() => onClear()} />
      </div>
      <div>
        {!cart.length ? (
          <h2>Список пуст...</h2>
        ) : (
          cart.map((prod) => (
            <CartItem
              prod={prod.product}
              key={prod.product.id}
              quantity={prod.quantity}
              prodTotalPrice={prod.total_price}
            />
          ))
        )}
      </div>
      <h3>Заказ на сумму {totalPrice} руб</h3>
      <h4 className={style.deliveryText}>
        Доставка {totalPrice < 800 ? "249р 🚚" : "бесплатно 😊"}
      </h4>
      <OrderForm />
    </div>
  );
};

export default OrderList;
