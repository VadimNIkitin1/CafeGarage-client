import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CategoriesList from "../components/CategoriesList/CategoriesList";
import ProductList from "../components/ProductList/ProductList";

import { useTelegram } from "../hooks/useTelegram";

import { fetchCategories } from "../store/categoriesSlice";
import { fetchProducts } from "../store/productsSlice";
import { fetchCart } from "../store/cartSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart.cart);

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
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(fetchCart());
  }, [quantity]);

  cart.map(
    (el) => cartArr.push(el.product.id) && cartQuantity.push(el.quantity)
  );

  return (
    <div>
      <CategoriesList />
      <ProductList cartArr={cartArr} cartQuantity={cartQuantity} />
    </div>
  );
};

export default HomePage;
