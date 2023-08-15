export const getCategories = async () => {
  const res = await fetch("http://62.217.176.220:8000/api/v1/categories/");
  return await res.json();
};

export const getProducts = async () => {
  const res = await fetch("http://31.129.101.240:8000/api/v1/products/");
  return await res.json();
};
