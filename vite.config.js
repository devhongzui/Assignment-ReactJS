import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({ input: ["resources/js/main.jsx"], refresh: false }),
        react(),
    ],
    build: {
        chunkSizeWarningLimit: 1600,
        target: "esnext",
    },
});
