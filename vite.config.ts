import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/",

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
        theme_color: "#7357FF",
        background_color: "#7357FF",
        icons: [
          {
            src: "icon192_maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any", // Added "any" to ensure compatibility
          },
          {
            src: "icon512_maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "icon512_rounded.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
        orientation: "portrait",
        display: "standalone",
        lang: "pt-BR",
        name: "ProteJÁ",
        description: "Aplicativo ProteJÁ",
      },
      injectRegister: "script",
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html",
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
