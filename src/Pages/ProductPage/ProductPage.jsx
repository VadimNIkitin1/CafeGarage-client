import { useNavigate, useParams } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/productsSlice";

import style from "./ProductPage.module.css";

const ProductPage = () => {
  const navigate = useNavigate();
  const { tg } = useTelegram();
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const { description, name, webp_image_url } = product;

  tg.BackButton.show();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  tg.onEvent("backButtonClicked", goBack);

  return (
    <div className={style.productPage}>
      <img
        className={style.img}
        src={webp_image_url}
        alt={`${webp_image_url}`}
      />
      <h1 className={style.name}>{name}</h1>
      <i className={style.description}>{description}</i>
    </div>
  );
};

export default ProductPage;
