import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/js/main.jsx",
                "resources/js/app-admin.js",
                "resources/scss/app-admin.scss",
            ],
        }),
        react(),
    ],
    build: {
        chunkSizeWarningLimit: 1600,
        target: "esnext",
    },
});
