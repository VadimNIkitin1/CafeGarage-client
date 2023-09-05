import { useSelector, useDispatch } from "react-redux";
import { toggleTabs } from "../../store/activeSlice";
import "./CategoriesItem.css";

const CategoriesItem = ({ category, index }) => {
  const activeTab = useSelector((state) => state.activeTab.active);
  const dispatch = useDispatch();
  return (
    <a
      className={activeTab === index ? "category-active" : "category"}
      href={`#${category.name}`}
      onClick={() => dispatch(toggleTabs(index))}
    >
      {category.name}
    </a>
  );
};

export default CategoriesItem;
