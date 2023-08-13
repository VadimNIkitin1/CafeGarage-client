import { useTelegram } from "./hooks/useTelegram";
import "./App.css";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const { onClose } = useTelegram();
  return (
    <div className={"app"}>
      <CategoriesList />
      <ProductList />
    </div>
  );
}

export default App;
