// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  // Use absolute base path only when you build for Pages
  base: process.env.NODE_ENV === "production" ? "/personal-portfolio/" : "/",

  plugins: [react()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), 
    },
  },
});
