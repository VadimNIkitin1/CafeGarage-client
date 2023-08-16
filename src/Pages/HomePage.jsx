import { CategoriesList } from "../components/CategoriesList/CategoriesList";
import ProductList from "../components/ProductList/ProductList";

const HomePage = () => {
  tg.BackButton.hide();

  return (
    <div>
      <CategoriesList />
      <ProductList />
    </div>
  );
};

export default HomePage;
