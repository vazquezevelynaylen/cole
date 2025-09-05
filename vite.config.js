import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default {
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@features': resolve(__dirname, 'src/features')
    }
  },
  server: { port: 5173 },
  preview: { port: 5173 }
}
