import { useState, useEffect } from "react";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import { getCategories } from "../../services/services";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className={"categories-list"}>
      {categories.map((category) => (
        <CategoriesItem key={category.name} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
