import { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
  // const [items, setItems] = useState([]);

  // const getProducts = async () => {
  //   const res = await fetch("http://localhost:4200/api/products");
  //   let data = await res.json();
  //   return setItems(data);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const items = [
    {
      id: 4,
      createdAt: "2023-08-07T19:18:03.590Z",
      updatedAt: "2023-08-08T09:13:42.244Z",
      name: "Бефстроганов",
      price: 240,
      imagePath: "uploads/beefstroganoff.jpeg",
      description:
        "Популярное во всём мире блюдо русской кухни, которое готовится из мелко нарезанных кусочков говядины с соусом.",
      category: "Вторые блюда",
    },
    {
      id: 3,
      createdAt: "2023-08-07T19:17:36.509Z",
      updatedAt: "2023-08-08T09:01:00.824Z",
      name: "Болоньезе",
      price: 240,
      imagePath: "uploads/bolognese.jpeg",
      description:
        " Паста с кусочками сочной говядины, обжаренными с луком в густом томатном соусе. Свежий базилик придаёт блюду терпкий колорит прованских трав.",
      category: "Паста",
    },
    {
      id: 2,
      createdAt: "2023-08-01T14:59:58.618Z",
      updatedAt: "2023-08-08T09:07:42.629Z",
      name: "Феттучини",
      price: 240,
      imagePath: "uploads/fettuccine.jpeg",
      description:
        "Паста Феттучини — традиционное итальянское макаронное изделие. В блюде много чеснока, сыра, разных пряностей и сливочного масла.",
      category: "Паста",
    },
    {
      id: 1,
      createdAt: "2023-08-01T14:41:25.266Z",
      updatedAt: "2023-08-08T09:12:09.280Z",
      name: "Карбонара",
      price: 240,
      imagePath: "uploads/karbonara.jpeg",
      description:
        "Спагетти с мелкими кусочками бекона, смешанные с соусом из яиц, сыра пармезан, соли и свежемолотого чёрного перца.",
      category: "Паста",
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <ProductItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
