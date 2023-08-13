import { useTelegram } from "./hooks/useTelegram";
import "./App.css";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import ProductList from "./components/ProductList/ProductList";
import { createContext, useState } from "react";

export const RefContext = createContext(null);

function App() {
  const [value, setValue] = useState();
  const { onClose } = useTelegram();
  return (
    <RefContext.Provider value={{ value, setValue }}>
      <CategoriesList />
      <ProductList />
    </RefContext.Provider>
  );
}

export default App;
