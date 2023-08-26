export const getCategories = async () => {
  const res = await fetch("https://swarovskidmitrii.ru/api/v1/categories");

  if (!res.ok) {
    throw new Response("", { status: res.status, statusText: res.statusText });
  }

  return res.json();
};

export const getProducts = async () => {
  const res = await fetch("https://swarovskidmitrii.ru/api/v1/products");

  if (!res.ok) {
    throw new Response("", { status: res.status, statusText: res.statusText });
  }

  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`https://swarovskidmitrii.ru/api/v1/products/${id}`);

  if (!res.ok) {
    throw new Response("", { status: res.status, statusText: res.statusText });
  }

  return res.json();
};
