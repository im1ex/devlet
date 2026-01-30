import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    VitePWA(),

    // VitePWA({
    //   registerType: 'autoUpdate',
    //   workbox: {
    //     globPatterns: ["**/*"],
    //   },
    //   includeAssets: [
    //     "**/*",
    //   ],
    //   manifest: {
    //     name: 'Developer Wallet',
    //     short_name: 'DevLet',
    //     description: 'A EVM wallet for developers',
    //     // ToDo: add icons
    //     // icons: [],

    //     start_url: '/',
    //     scope: '/',

    //     theme_color: '#fdbefb',
    //   },
    //   devOptions: {
    //     enabled: true
    //   }
    // }),
  ],
})
