import { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    const res = await fetch("http://localhost:4200/api/products");
    let data = await res.json();
    return setItems(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <ProductItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
