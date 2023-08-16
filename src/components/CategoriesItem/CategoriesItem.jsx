import "./CategoriesItem.css";

const CategoriesItem = ({ category, index, toggleTabs, activeTab }) => {
  const { name } = category;

  return (
    <a
      className={activeTab === index ? "category-active" : "category"}
      href={`#${name}`}
      onClick={() => toggleTabs(index)}
    >
      {name}
    </a>
  );
};

export default CategoriesItem;
