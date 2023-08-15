import { useState } from "react";
import "./CategoriesItem.css";

const CategoriesItem = ({ category, index, toggleTabs, activeTab }) => {
  const { name } = category;

  return (
    <button>
      <a
        className={activeTab === index ? "category-active" : "category"}
        href={`#${name}`}
        onClick={() => toggleTabs(index)}
      >
        {name}
      </a>
    </button>
  );
};

export default CategoriesItem;
