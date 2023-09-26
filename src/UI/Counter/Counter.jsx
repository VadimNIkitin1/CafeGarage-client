import { useDispatch } from "react-redux";

import { onAddProduct, onDecreaseProduct } from "../../store/cartSlice";

import style from "./Counter.module.css";
import CounterButton from "../CounterButton/CounterButton";

const Counter = ({ children, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.Counter}>
      <CounterButton
        children={"➖"}
        className={style.minus}
        onClick={() => dispatch(onDecreaseProduct(id))}
      />
      <p className={style.quantity}>{children}</p>
      <CounterButton
        children={"➕"}
        className={style.plus}
        onClick={() => dispatch(onAddProduct(id))}
      />
    </div>
  );
};

export default Counter;
