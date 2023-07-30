import { useTelegram } from "./hooks/useTelegram";
import Button from "./components/Button/Button";
import "./App.css";
import ProductItem from "./components/ProductItem/ProductItem";

function App() {
  const { onClose } = useTelegram();
  return (
    <>
      <Button>Close</Button>
      <ProductItem />
    </>
  );
}

export default App;
