import { useEffect, useState } from "react";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import ProductList from "../components/ProductList/ProductList";
import { useTelegram } from "../hooks/useTelegram";
import { useNavigate } from "react-router-dom";
import {
  getCart,
  addToCart,
  decreaseProduct,
  getCartTotalPrice,
  getCategories,
  getProducts,
} from "../services/services";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const { tg } = useTelegram();
  tg.BackButton.hide();

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Перейти в корзину",
    });
  }, []);

  const goToForm = () => {
    navigate("/form");
  };

  if (cart.length === 0) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.show();
  }

  tg.onEvent("mainButtonClicked", goToForm);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  const toggleTabs = (i) => {
    setActive(i);
  };

  useEffect(() => {
    getCart().then((data) => setCart(data));
  }, [quantity]);

  const onAddHandler = async (id) => {
    await addToCart(id).then((data) => console.log(data));
    setQuantity((prev) => prev + 1);
    getCartTotalPrice().then((data) => console.log(data.total_price));
  };

  const onDecreaseHandler = async (id) => {
    await decreaseProduct(id).then((data) => console.log(data));
    setQuantity((prev) => prev - 1);
    getCartTotalPrice().then((data) => console.log(data.total_price));
  };

  return (
    <div>
      <CategoriesList
        categories={categories}
        toggleTabs={toggleTabs}
        active={active}
      />
      <ProductList
        onAddHandler={onAddHandler}
        onDecreaseHandler={onDecreaseHandler}
        cart={cart}
        categories={categories}
        products={products}
      />
    </div>
  );
};

export default HomePage;
