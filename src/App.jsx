import { useTelegram } from "./hooks/useTelegram";
import "./App.css";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const { onClose } = useTelegram();
  return (
    <>
      <CategoriesList />
      <ProductList />
    </>
  );
}

export default App;
