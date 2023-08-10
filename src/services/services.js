export const getCategories = async () => {
  const res = await fetch("http://localhost:4200/api/categories");
  return await res.json();
};

export const getProducts = async () => {
  const res = await fetch("http://localhost:4200/api/products");
  return await res.json();
};
