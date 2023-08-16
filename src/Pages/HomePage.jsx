import { CategoriesList } from "../components/CategoriesList/CategoriesList";
import ProductList from "../components/ProductList/ProductList";

const HomePage = () => {
  return (
    <div>
      <CategoriesList />
      <ProductList />
    </div>
  );
};

export default HomePage;
