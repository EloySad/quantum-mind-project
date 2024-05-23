import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'music': 'src/pages/music.html',
        'about': 'src/pages/about.html',
        'contact': 'src/pages/contact.html',
        // Agrega más páginas según sea necesario
      },
    },
  },
});



