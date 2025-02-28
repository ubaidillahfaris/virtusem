import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import compression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        compression({
            algorithm: 'brotliCompress', // Gunakan Brotli untuk kompresi terbaik (bisa juga 'gzip')
            threshold: 10240, // Hanya kompres file lebih besar dari 10KB
        }),
    ],
    server: {
        hmr: {
            host: 'localhost',
        },
    },
});
