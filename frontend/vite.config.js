import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_FIREBASE_API_KEY": JSON.stringify(process.env.VITE_FIREBASE_API_KEY),
  },
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"), // Adjust if necessary
    },
  },
});
