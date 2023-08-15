import { useState, useEffect } from "react";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import { getCategories } from "../../services/services";
import "./CategoriesList.css";
import { categories } from "../../mockDB";

const CategoriesList = () => {
  const [active, setActive] = useState(0);

  const toggleTabs = (i) => {
    setActive(i);
  };

  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   getCategories().then((data) => setCategories(data));
  // }, []);

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
