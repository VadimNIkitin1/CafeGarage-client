import "./CategoriesItem.css";

const CategoriesItem = ({ category }) => {
  const { name } = category;

  const toggleTabs = (e) => {
    e.target.className = "category-active";
  };

  return (
    <button>
      <a
        className={"category"}
        href={`#${name}`}
        onClick={(e) => toggleTabs(e)}
      >
        {name}
      </a>
    </button>
  );
};

export default CategoriesItem;
