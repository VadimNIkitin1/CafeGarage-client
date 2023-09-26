import style from "./AddButton.module.css";

const AddButton = (props) => {
  return <button {...props} className={style.button} />;
};
export default AddButton;
