import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/myschool/",
  publicDir: "public",
  plugins: [react()],
});
