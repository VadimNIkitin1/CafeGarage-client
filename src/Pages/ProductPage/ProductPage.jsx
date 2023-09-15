import { useNavigate, useParams } from "react-router-dom";
import style from "./ProductPage.module.css";
import { useTelegram } from "../../hooks/useTelegram";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/services";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { description, name, webp_image_url } = product;
  const { tg } = useTelegram();
  const navigate = useNavigate();
  tg.BackButton.show();

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
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
