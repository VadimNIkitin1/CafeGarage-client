import { BsFillTrashFill } from "react-icons/bs";
import style from "./TrashButton.module.css";

const TrashButton = (props) => {
  return (
    <button className={style.button} {...props}>
      <BsFillTrashFill />
    </button>
  );
};

export default TrashButton;
