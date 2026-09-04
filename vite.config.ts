import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/Digitalbank-Landing-Page/',
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 43125,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 43125,
    strictPort: true,
  },
});
