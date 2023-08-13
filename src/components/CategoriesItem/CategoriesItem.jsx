import "./CategoriesItem.css";

const CategoriesItem = ({ category }) => {
  const { name } = category;

  return (
    <button>
      <a className={"category"} href={`#${name}`}>
        {name}
      </a>
    </button>
  );
};

export default CategoriesItem;
