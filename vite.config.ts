import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import mdx from "@mdx-js/rollup"
import tailwindcss from "@tailwindcss/vite"
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // MDX must run before React so MDX is compiled to JSX first
    mdx({ providerImportSource: "@mdx-js/react" }),
    react(),
    tailwindcss(),
    vercel(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
