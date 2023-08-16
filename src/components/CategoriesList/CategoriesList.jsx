import { useState } from "react";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import { getCategories } from "../../services/services";
import "./CategoriesList.css";
import { useLoaderData, defer } from "react-router-dom";
// import { categories } from "../../mockDB";

const CategoriesList = () => {
  const { categories } = useLoaderData();
  const [active, setActive] = useState(0);

  const toggleTabs = (i) => {
    setActive(i);
  };

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

const categoriesLoader = async () => {
  return defer({
    categories: await getCategories(),
  });
};

export { CategoriesList, categoriesLoader };
