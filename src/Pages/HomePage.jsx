import { useEffect } from "react";
import { CategoriesList } from "../components/CategoriesList/CategoriesList";
import ProductList from "../components/ProductList/ProductList";
import { useTelegram } from "../hooks/useTelegram";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { tg } = useTelegram();
  tg.BackButton.hide();

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Перейти в корзину",
    });
  }, []);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", navigate("/form", { replace: true }));
    return () => {
      tg.offEvent("mainButtonClicked");
    };
  }, [navigate]);

  tg.MainButton.show();

  return (
    <div>
      <CategoriesList />
      <ProductList />
    </div>
  );
};

export default HomePage;
