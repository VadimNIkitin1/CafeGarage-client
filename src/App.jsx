import { useTelegram } from "./hooks/useTelegram";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const { onClose } = useTelegram();
  return (
    <>
      <Button onClick={onClose}>Close</Button>
    </>
  );
}

export default App;
