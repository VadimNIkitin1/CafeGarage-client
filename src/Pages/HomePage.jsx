import { useEffect, useState } from "react";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import ProductList from "../components/ProductList/ProductList";
import { useTelegram } from "../hooks/useTelegram";
import { useNavigate } from "react-router-dom";
import {
  getCart,
  addToCart,
  decreaseProduct,
  getCategories,
  getProducts,
} from "../services/services";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../store/quantitySlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity.quantity);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [categories, setCategories] = useState([]);
  const cartArr = [];
  const cartQuantity = [];

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
    getProducts().then((data) => setProducts(() => data));
  }, []);

  useEffect(() => {
    getCategories().then((data) => setCategories(() => data));
  }, []);

  useEffect(() => {
    getCart().then((data) => setCart(data));
  }, [quantity]);

  cart.map(
    (el) => cartArr.push(el.product.id) && cartQuantity.push(el.quantity)
  );

  const onAddHandler = async (id) => {
    await addToCart(id);
    dispatch(incrementQuantity());
  };

  const onDecreaseHandler = async (id) => {
    await decreaseProduct(id);
    dispatch(decrementQuantity());
  };

  return (
    <div>
      <CategoriesList categories={categories} />
      <ProductList
        onAddHandler={onAddHandler}
        onDecreaseHandler={onDecreaseHandler}
        cart={cart}
        categories={categories}
        products={products}
        cartArr={cartArr}
        cartQuantity={cartQuantity}
      />
    </div>
  );
};

export default HomePage;
