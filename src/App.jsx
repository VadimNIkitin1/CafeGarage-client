import { useTelegram } from "./hooks/useTelegram";
import "./App.css";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import ProductList from "./components/ProductList/ProductList";
import { useEffect } from "react";

function App() {
  const { onClose, tg } = useTelegram();

  useEffect(() => {
    tg.expand();
  }, []);

  return (
    <div className={"app"}>
      <CategoriesList />
      <ProductList />
    </div>
  );
}

export default App;
