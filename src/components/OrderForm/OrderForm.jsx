import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import Inputmask from "inputmask";
import { useTelegram } from "../../hooks/useTelegram";
import { onClearCart, onSendOrder } from "../../store/cartSlice";

import style from "./OrderForm.module.css";

const OrderForm = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { tg, id, onClose, initDataHash } = useTelegram();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  // Inputmask().mask(document.querySelectorAll("input"));

  const onSubmit = useCallback(
    (data) => {
      const requestData = {
        items: cart,
        name: data.name,
        phone: data.phone,
        user_id: id,
        initDataHash,
      };

      // const dataQuery = {
      //   queryId,
      // };

      // await dispatch(onSendQuery(dataQuery));
      console.log(requestData);
      dispatch(onSendOrder(requestData));
      dispatch(onClearCart());
      reset();
      onClose();
    },
    [cart]
  );

  const mainButtonSubmitHandler = handleSubmit(onSubmit);

  useEffect(() => {
    if (isValid) {
      tg.MainButton.setParams({
        text: "Заказать",
      })
        .show()
        .onClick(mainButtonSubmitHandler);
    } else {
      tg.MainButton.hide();
    }
    return () => {
      tg.MainButton.offClick(mainButtonSubmitHandler);
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
        type="text"
        placeholder="Телефон"
        {...register("phone", {
          required: "Это поле обязательно для заполнения!",
        })}
      />
      {errors.phone && <p className={style.errorMsg}>{errors.phone.message}</p>}

      {/* <input
        data-inputmask="'mask': '+7(999)999-99-99'"
        className={style.orderInput}
      /> */}
    </form>
  );
};

export default OrderForm;
