import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useTelegram } from "../../hooks/useTelegram";
import { onClearCart, onSendOrder } from "../../store/cartSlice";
import style from "./OrderForm.module.css";

const OrderForm = () => {
  const { tg } = useTelegram();
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    const requestData = {
      items: cart,
      name: data.name,
      phone: data.phone,
    };

    await dispatch(onSendOrder(requestData));
    await reset();
    navigate("/");
  };

  useEffect(() => {
    tg.BackButton.show();
    tg.MainButton.setParams({
      text: "Заказать",
    });
  }, []);

  useEffect(() => {
    if (isValid) {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
  }, [isValid]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", handleSubmit(onSubmit));
    return () => {
      tg.onEvent("mainButtonClicked", handleSubmit(onSubmit));
    };
  }, [handleSubmit]);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    tg.onEvent("backButtonClicked", goBack);
    return () => {
      tg.offEvent("backButtonClicked", goBack);
    };
  }, []);

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
