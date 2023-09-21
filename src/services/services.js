import axios from "axios";

axios.defaults.baseURL = "https://swarovskidmitrii.ru/api/v1";
axios.defaults.withCredentials = true;

export const getCategories = async () => {
  try {
    const res = await axios.get(`/categories/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const res = await axios.get(`/products/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (id) => {
  try {
    const res = await axios.post(
      `/products/add-to-cart/`,
      {
        product_id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Запрос на получение актуального количества продукта в корзине
// Подойдет для отладки и проверки добавляется ли товар

// export const getQuantityById = async (id) => {
//   try {
//     const res = await axios.get(`/get-cart-item-quantity/`, {
//       params: {
//         product_id: id,
//       },
//     });
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const decreaseProduct = async (id) => {
  try {
    const res = await axios.delete(`/products/decrease-cart-item/`, {
      data: {
        product_id: id,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async () => {
  try {
    const res = await axios.get(`/cart-items/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const clearCart = async () => {
  try {
    const res = await axios.delete(`/clear-cart/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCartTotalPrice = async () => {
  try {
    const res = await axios.get("/get-cart-total-price/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendOrder = async (order) => {
  try {
    const res = await axios.post(`/orders/create/`, order, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendQuery = async (data) => {
  try {
    const res = await axios.post("http://45.9.41.211", data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
