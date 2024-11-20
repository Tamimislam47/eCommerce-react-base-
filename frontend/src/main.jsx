import AuthProviderContext from "./ContextApi/AuthProvider.jsx";
import ProductProvider from "./ContextApi/ProductProvider.jsx";
import ProductDataProvider from "./ContextApi/ProductDataProvider.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import router from "./components/Routing/Routes.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviderContext>
      <ProductDataProvider>
        <ProductProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </ProductProvider>
      </ProductDataProvider>
    </AuthProviderContext>
  </StrictMode>,
);
