// import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// // https://vitejs.dev/config/
// export default defineConfig(async () => ({
//   plugins: [react()],

//   // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
//   //
//   // 1. prevent vite from obscuring rust errors
//   clearScreen: false,
//   // 2. tauri expects a fixed port, fail if that port is not available
//   server: {
//     // port: 1420,
//     strictPort: true,
//   },
// }));

import { defineConfig } from 'vite'

export default defineConfig({
    // prevent vite from obscuring rust errors
    clearScreen: false,
    plugins: [react()],
    // Tauri expects a fixed port, fail if that port is not available
    server: {
        strictPort: true,
        port: 1420,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    // to access the Tauri environment variables set by the CLI with information about the current target
    envPrefix: ['VITE_', 'TAURI_PLATFORM', 'TAURI_ARCH', 'TAURI_FAMILY', 'TAURI_PLATFORM_VERSION', 'TAURI_PLATFORM_TYPE', 'TAURI_DEBUG'],
    build: {
        // Tauri uses Chromium on Windows and WebKit on macOS and Linux
        target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        // don't minify for debug builds
        minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
        // produce sourcemaps for debug builds
        sourcemap: !!process.env.TAURI_DEBUG,
    },
})