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

export const addToCart = async (id) => {
  const res = await fetch(
    `https://swarovskidmitrii.ru/api/v1/products/add-to-cart/?product_id=${id}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Response("", { status: res.status, statusText: res.statusText });
  }

  return res.json();
};

export const getQuantityById = async (id) => {
  const res = await fetch(
    `https://swarovskidmitrii.ru/api/v1/get-cart-item-quantity/?product_id=${id}`,
    {
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Response("", { status: res.status, statusText: res.statusText });
  }

  return res.json();
};

export const decreaseProduct = (id) => {
  const res = fetch(
    `https://swarovskidmitrii.ru/api/v1/decrease-cart-item/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Response("", { status: res.status, statusText: res.statusText });
  }

  return res.json();
};

export const getCart = () => {
  const res = fetch(`https://swarovskidmitrii.ru/api/v1/cart-items/`);

  if (!res.ok) {
    throw new Response("", { status: res.status, statusText: res.statusText });
  }

  return res.json();
};

export const clearCart = () => {
  const res = fetch(`https://swarovskidmitrii.ru/api/v1/clear-cart/`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Response("", { status: res.status, statusText: res.statusText });
  }

  return res.json();
};
