import "./CategoriesItem.css";

const CategoriesItem = ({ category }) => {
  const { name } = category;

  return <button className={"category"}>{name}</button>;
};

export default CategoriesItem;
