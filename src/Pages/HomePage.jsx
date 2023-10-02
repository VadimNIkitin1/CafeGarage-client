import { useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoriesList from "../components/CategoriesList/CategoriesList";
import ProductList from "../components/ProductList/ProductList";

import { useTelegram } from "../hooks/useTelegram";
import { useCustomNavigate } from "../hooks/useCustomNavigate";

import { fetchCategories } from "../store/categoriesSlice";
import { fetchProducts } from "../store/productsSlice";
import { fetchCart } from "../store/cartSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  const { goToForm } = useCustomNavigate();
  const { tg } = useTelegram();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(fetchCart());
  }, [quantity]);

  useEffect(() => {
    tg.BackButton.hide();
    if (cart.length !== 0) {
      tg.MainButton.setParams({
        text: "Перейти в корзину",
      })
        .show()
        .onClick(goToForm);
    } else {
      tg.MainButton.hide();
    }
    return () => {
      tg.MainButton.offClick(goToForm);
    };
  }, [cart]);

  return (
    <div>
      <CategoriesList />
      <ProductList />
    </div>
  );
};

export default HomePage;
