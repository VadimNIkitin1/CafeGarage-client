import { useState } from "react";
import "./CategoriesItem.css";

const CategoriesItem = ({ category }) => {
  const [active, setActive] = useState(false);
  const { name } = category;

  const activeToggle = () => {
    setActive(!active);
  };

  return (
    <button
      onClick={() => activeToggle()}
      className={active === true ? "category-active" : "category"}
    >
      {name}
    </button>
  );
};

export default CategoriesItem;
