import style from "./OrderList.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { getCart } from "../../services/services";
import { useLoaderData, defer } from "react-router-dom";
import OrderForm from "../OrderForm/OrderForm";

const OrderList = () => {
  // const { cart } = useLoaderData();
  // console.log(cart);

  return (
    <div className={style.orderListContainer}>
      <div className={style.orderTitle}>
        <h1>Ваш заказ</h1>
        <button className={style.trashBtn}>
          <BsFillTrashFill />
        </button>
      </div>
      <h2>Тут будет список сосисок....</h2>
      <h4 className={style.deliveryText}>Доставка бесплатно</h4>
      <OrderForm />
    </div>
  );
};

// const cartLoader = async () => {
//   return defer({ cart: await getCart() });
// };

export { OrderList };
