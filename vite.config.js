import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // eslint-disable-next-line no-undef
  base: process.env?.GITHUB_REPOSITORY_NAME ?? "/",
});
