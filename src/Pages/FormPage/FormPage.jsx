import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import style from "./FormPage.module.css";

import { onSendOrder } from "../../store/cartSlice";

import OrderList from "../../components/OrderList/OrderList";

import { useTelegram } from "../../hooks/useTelegram";

import { fetchCart, fetchTotalPrice } from "../../store/cartSlice";

const FormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quantity = useSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart.cart);

  const { tg } = useTelegram();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    const requestData = {
      items: cart,
      name: data.name,
      phone: data.phone,
    };
    await dispatch(onSendOrder(requestData));
    tg.close();
  };

  useEffect(() => {
    if (isValid) {
      tg.MainButton.setParams({
        text: "Заказать",
      });
      tg.MainButton.show();
      tg.MainButton.onClick(handleSubmit(onSubmit));
    } else {
      tg.MainButton.hide();
    }
  }, [isValid]);

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchTotalPrice());
  }, [quantity]);

  tg.BackButton.show();

  const goBack = () => {
    tg.MainButton.offClick(handleSubmit(onSubmit));
    navigate("/");
  };

  tg.BackButton.onClick(goBack);

  return (
    <div>
      <OrderList />
      <form className={style.OrderForm} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={style.orderInput}
          placeholder="Имя"
          {...register("name", {
            required: "Это поле обязательно для заполнения!",
          })}
        />
        {errors?.name && (
          <p className={style.errorMsg}>{errors.name.message}</p>
        )}
        <input
          className={style.orderInput}
          type="tel"
          placeholder="Телефон"
          {...register("phone", {
            required: "Это поле обязательно для заполнения!",
          })}
        />
        {errors.phone && (
          <p className={style.errorMsg}>{errors.phone.message}</p>
        )}
        <input type="submit" value="Заказать" />
      </form>
    </div>
  );
};

export default FormPage;
