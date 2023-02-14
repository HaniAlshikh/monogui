import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    envPrefix: "MONOGUI_",
    server: {
        port: 3000,
        watch: {
            usePolling: true,
        },
        host: true, // needed for the Docker Container port mapping to work
        strictPort: true,
    },
    plugins: [
        react(),
    ],
})
