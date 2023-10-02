import { BsFillTrashFill } from "react-icons/bs";
import style from "./TrashButton.module.css";

const TrashButton = ({ onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      <BsFillTrashFill />
    </button>
  );
};

export default TrashButton;
