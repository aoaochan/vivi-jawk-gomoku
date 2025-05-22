import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "https://aoaochan.github.io/vivi-jawk-gomoku.io/",
  plugins: [tailwindcss()],
  server: { host: true }
});