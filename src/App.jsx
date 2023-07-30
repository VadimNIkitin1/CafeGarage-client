import { useTelegram } from "./hooks/useTelegram";
import Button from "./components/Button/Button";
import "./App.css";
import ProductItem from "./components/ProductItem/ProductItem";

function App() {
  const { onClose } = useTelegram();
  return (
    <>
      <ProductItem />
    </>
  );
}

export default App;
