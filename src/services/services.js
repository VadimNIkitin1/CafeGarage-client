export const getCategories = async () => {
  const res = await fetch("http://localhost:4200/api/categories");

  if (!res.ok) {
    throw new Response("", { status: res.status, statusText: res.statusText });
  }

  return res.json();
};

export const getProducts = async () => {
  const res = await fetch("http://localhost:4200/api/products");
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`http://localhost:4200/api/products/${id}`);
  return res.json();
};
