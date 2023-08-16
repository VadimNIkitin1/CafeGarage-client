import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import FormPage from "./Pages/FormPage";
import { ProductPage, productLoader } from "./Pages/ProductPage/ProductPage";
import ErrorPage from "./Pages/ErrorPage";
import NotFoundPage from "./Pages/NotFoundPage";
import { categoriesLoader } from "./components/CategoriesList/CategoriesList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index
        path="/"
        element={<HomePage />}
        loader={categoriesLoader}
        errorElement={<ErrorPage />}
      />
      <Route
        path={"products/:id"}
        element={<ProductPage />}
        loader={productLoader}
      />
      <Route path={"form"} element={<FormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default router;
