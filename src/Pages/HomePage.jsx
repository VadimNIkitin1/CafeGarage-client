import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CategoriesList from "../components/CategoriesList/CategoriesList";
import ProductList from "../components/ProductList/ProductList";

import { useTelegram } from "../hooks/useTelegram";

import { getCart, addToCart, decreaseProduct } from "../services/services";

import { incrementQuantity, decrementQuantity } from "../store/quantitySlice";
import { fetchCategories } from "../store/categoriesSlice";
import { fetchProducts } from "../store/productsSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity.quantity);
  const [cart, setCart] = useState([]);

  const cartArr = [];
  const cartQuantity = [];

  const navigate = useNavigate();
  const { tg } = useTelegram();

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
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
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
      <CategoriesList />
      <ProductList
        onAddHandler={onAddHandler}
        onDecreaseHandler={onDecreaseHandler}
        cart={cart}
        cartArr={cartArr}
        cartQuantity={cartQuantity}
      />
    </div>
  );
};

export default HomePage;
