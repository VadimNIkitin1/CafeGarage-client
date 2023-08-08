import { useState, useEffect } from "react";
import CategoriesItem from "../CategoriesItem/CategoriesItem";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const res = await fetch("http://localhost:4200/api/categories");
    const data = await res.json();
    return setCategories(data);
  };

  useEffect(() => {
    getCategories();
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
