import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import router from "./components/Routing/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProviderContext from "./ContextApi/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviderContext>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
  </AuthProviderContext>
  </StrictMode>,
);
