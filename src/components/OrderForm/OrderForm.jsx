import { useState } from "react";
import style from "./OrderForm.module.css";

const OrderForm = () => {
  const [name, setName] = useState("Имя:");
  const [phone, setPhone] = useState("Телефон:");
  const [address, setAddress] = useState("Адрес:");
  const [comments, setComments] = useState("Комментарии:");

  return (
    <form className={style.OrderForm}>
      <input
        className={style.orderInput}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onClick={() => setName("")}
      />
      <input
        className={style.orderInput}
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        onClick={() => setPhone("")}
      />
      <input
        className={style.orderInput}
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onClick={() => setAddress("")}
      />
      <input
        className={style.orderInput}
        type="text"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        onClick={() => setComments("")}
      />
    </form>
  );
};

export default OrderForm;
