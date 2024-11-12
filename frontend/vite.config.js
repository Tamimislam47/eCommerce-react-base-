import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // if you're using React
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"), // Adjust path as needed
    },
  },
});
