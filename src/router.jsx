import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import FormPage from "./Pages/FormPage/FormPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ErrorPage from "./Pages/ErrorPage";
import NotFoundPage from "./Pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index
        path="/"
        element={<HomePage />}
        errorElement={<ErrorPage />}
      />
      <Route path={"products/:id"} element={<ProductPage />} />
      <Route
        path={"form"}
        element={<FormPage />}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

export default router;
