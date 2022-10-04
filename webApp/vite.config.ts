import react from '@vitejs/plugin-react';
 
import { defineConfig } from 'vite';
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
 
export default defineConfig({
  plugins: [
    viteCommonjs(),
    react({
      babel: {
        parserOpts: {
          plugins: [
            'optionalChaining',
            'nullishCoalescingOperator',
            'logicalAssignment',
          ],
        },
      },
    }),
  ],
 
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        esbuildCommonjs(['tiny-slider', 'tiny-slider-react']),
      ],
    },
  },
});