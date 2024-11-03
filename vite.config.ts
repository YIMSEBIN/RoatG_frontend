import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@src", replacement: resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "@assets",
        replacement: resolve(__dirname, "src/assets"),
      },
    ],
  },
  base: "/frontend/",
  build: {
    outDir: "build", // 빌드 폴더를 'build'로 설정
  },
});
