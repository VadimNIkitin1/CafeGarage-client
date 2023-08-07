import { useTelegram } from "./hooks/useTelegram";
import Button from "./components/Button/Button";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const { onClose } = useTelegram();
  return (
    <>
      <ProductList />
    </>
  );
}

export default App;
