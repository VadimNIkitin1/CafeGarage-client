import CategoriesItem from "../CategoriesItem/CategoriesItem";
import { useSelector } from "react-redux";
import style from "./CategoriesList.module.css";

const CategoriesList = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className={style.categoriesList}>
      {categories.map((category, index) => (
        <CategoriesItem key={category.name} category={category} index={index} />
      ))}
    </div>
  );
};

export default CategoriesList;
