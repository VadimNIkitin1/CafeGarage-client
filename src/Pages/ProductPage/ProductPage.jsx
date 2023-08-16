import {
  defer,
  useAsyncValue,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { getProductById } from "../../services/services";

import style from "./ProductPage.module.css";
import { useTelegram } from "../../hooks/useTelegram";
// import { products } from "../../mockDB/index.js";

const ProductPage = () => {
  const { product } = useLoaderData();
  const { tg } = useTelegram();
  const navigate = useNavigate();
  tg.BackButton.show();

  const goBack = () => {
    navigate(-1);
  };
  Telegram.WebApp.onEvent("backButtonClicked", goBack);

  const { description, imagePath, name } = product;

  return (
    <div className={style.productPage}>
      <img
        className={style.img}
        src={`http://localhost:4200/${imagePath}`}
        alt={`${imagePath}`}
      />
      <h1 className={style.name}>{name}</h1>
      <i className={style.description}>{description}</i>
    </div>
  );
};

const productLoader = async ({ params }) => {
  const id = params.id;

  return defer({ product: await getProductById(id), id });
};

export { ProductPage, productLoader };
