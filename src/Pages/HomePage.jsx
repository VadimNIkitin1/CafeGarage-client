import { useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CategoriesList from "../components/CategoriesList/CategoriesList";
import ProductList from "../components/ProductList/ProductList";

import { useTelegram } from "../hooks/useTelegram";

import { fetchCategories } from "../store/categoriesSlice";
import { fetchProducts } from "../store/productsSlice";
import { fetchCart } from "../store/cartSlice";

export const Context = createContext(null);
window.location.reload();

const HomePage = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart.cart);

  const cartArr = [];
  const cartQuantity = [];

  cart.map(
    (el) => cartArr.push(el.product.id) && cartQuantity.push(el.quantity)
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(fetchCart());
  }, [quantity]);

  const navigate = useNavigate();
  const { tg } = useTelegram();

  const goToForm = () => {
    navigate("/form");
  };

  tg.BackButton.hide();

  useEffect(() => {
    if (cart.length !== 0) {
      tg.MainButton.setParams({
        text: "Перейти в корзину",
      });
      tg.MainButton.show();
      tg.MainButton.onClick(goToForm);
    } else {
      tg.MainButton.hide();
    }
  }, [cart]);

  return (
    <div>
      <CategoriesList />
      <Context.Provider value={{ cartArr, cartQuantity }}>
        <ProductList />
      </Context.Provider>
    </div>
  );
};

export default HomePage;
