import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg'],
    }),
    react({
      babel: {
        plugins: ['babel-plugin-macros'],
      },
    }),
  ],
})
