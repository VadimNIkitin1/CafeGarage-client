import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import { onSendOrder } from "../../store/cartSlice";
import style from "./OrderForm.module.css";

const OrderForm = () => {
  const { tg } = useTelegram();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

    return () => {
      tg.offEvent("mainButtonClicked", handleSubmit(onSubmit));
    };
  }, [isValid]);

  return (
    <form className={style.OrderForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={style.orderInput}
        placeholder="Имя"
        {...register("name", {
          required: "Это поле обязательно для заполнения!",
        })}
      />
      {errors?.name && <p className={style.errorMsg}>{errors.name.message}</p>}
      <input
        className={style.orderInput}
        type="tel"
        placeholder="Телефон"
        {...register("phone", {
          required: "Это поле обязательно для заполнения!",
        })}
      />
      {errors.phone && <p className={style.errorMsg}>{errors.phone.message}</p>}
      <input type="submit" value="Заказать" />
    </form>
  );
};

export default OrderForm;
