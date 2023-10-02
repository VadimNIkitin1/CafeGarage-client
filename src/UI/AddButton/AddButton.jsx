import style from "./AddButton.module.css";

const AddButton = (props) => {
  return (
    <button {...props} className={style.button}>
      {props.text}
    </button>
  );
};
export default AddButton;
