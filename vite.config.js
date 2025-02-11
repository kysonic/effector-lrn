import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()], // Поддержка React
    server: {
        port: 3000, // Порт для разработки
        open: true, // Автоматически открывать браузер
    },
    build: {
        outDir: 'dist', // Папка для сборки
        emptyOutDir: true, // Очищать папку перед сборкой
    },
});
