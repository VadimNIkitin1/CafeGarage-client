import { useSelector, useDispatch } from "react-redux";
import { toggleTabs } from "../../store/activeSlice";
import style from "./CategoriesItem.module.css";

const CategoriesItem = ({ category, index }) => {
  const activeTab = useSelector((state) => state.activeTab.active);
  const dispatch = useDispatch();
  return (
    <a
      className={activeTab === index ? style.categoryActive : style.category}
      href={`#${category.name}`}
      onClick={() => dispatch(toggleTabs(index))}
    >
      {category.name}
    </a>
  );
};

export default CategoriesItem;
