import CategoriesItem from "../CategoriesItem/CategoriesItem";

import "./CategoriesList.css";

const CategoriesList = ({ categories }) => {
  return (
    <div className={"categories-list"}>
      {categories.map((category, index) => (
        <CategoriesItem key={category.name} category={category} index={index} />
      ))}
    </div>
  );
};

export default CategoriesList;
