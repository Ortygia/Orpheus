import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
//import path from 'path'
//import ViewLauncherVuePlugin from '@view-launcher/rollup-plugin-vue'
export default defineConfig(({ mode }) => {
  // load the .env file
  // you may want to create one like `.env.development.local`
  //const env = loadEnv(mode, __dirname)

  return {
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        allow: ['..']
      }
    },
    // base: path.resolve(__dirname, './dist/'),
    plugins: [
      /*       ViewLauncherVuePlugin({
        entry: path.resolve(__dirname, 'src/main.js'),
        theme: 'dark',
        editor: env.VITE_EDITOR || 'vscode',
      }), */
      vue(),
    ],
  }
})