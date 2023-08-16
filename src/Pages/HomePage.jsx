import { CategoriesList } from "../components/CategoriesList/CategoriesList";
import ProductList from "../components/ProductList/ProductList";
import { useTelegram } from "../hooks/useTelegram";

const HomePage = () => {
  const { tg } = useTelegram();
  tg.BackButton.hide();

  return (
    <div>
      <CategoriesList />
      <ProductList />
    </div>
  );
};

export default HomePage;
