import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    envPrefix: "MONOGUI_",
    server: {
        port: 3000,
    },
    plugins: [
        react(),
        // viteCommonjs(),
    ],
    // optimizeDeps:{
    //     include: ['m8_api'],
    //     esbuildOptions:{
    //         plugins:[
    //             esbuildCommonjs(['m8_api'])
    //         ]
    //     }
    // },
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
})
