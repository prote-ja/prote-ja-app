import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/prote-ja-app/",

  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "apple-touch-icon.png",
        "mask-icon.svg",
      ],
      manifest: {
        theme_color: "#8168ff",
        background_color: "#8168ff",
        icons: [
          {
            src: "icon192_maskable.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "icon512_maskable.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "icon512_rounded.png",
            type: "image/png",
          },
        ],
        orientation: "portrait",
        display: "standalone",
        lang: "pt-BR",
        name: "ProteJÁ",
        description: "Aplicativo ProteJÁ",
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react"],
          "react-dom": ["react-dom"],
        },
      },
    },
  },
});
