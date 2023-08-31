import style from "./OrderList.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import OrderForm from "../OrderForm/OrderForm";
import CartItem from "../CartItem/CartItem";

const OrderList = ({
  totalPrice,
  clearCartHandler,
  cart,
  onAddHandler,
  onDecreaseHandler,
}) => {
  console.log(cart);
  return (
    <div className={style.orderListContainer}>
      <div className={style.orderTitle}>
        <h1>Ваш заказ</h1>
        <button className={style.trashBtn} onClick={() => clearCartHandler()}>
          <BsFillTrashFill />
        </button>
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
              onAddHandler={onAddHandler}
              onDecreaseHandler={onDecreaseHandler}
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
