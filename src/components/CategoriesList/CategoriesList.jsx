import CategoriesItem from "../CategoriesItem/CategoriesItem";

import "./CategoriesList.css";

const CategoriesList = ({ categories, toggleTabs, active }) => {
  return (
    <div className={"categories-list"}>
      {categories.map((category, index) => (
        <CategoriesItem
          key={category.name}
          category={category}
          index={index}
          toggleTabs={toggleTabs}
          activeTab={active}
        />
      ))}
    </div>
  );
};

export default CategoriesList;
