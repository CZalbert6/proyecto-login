// astro.config.mjs - PARA GITHUB PAGES
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Tu URL de GitHub Pages
  site: 'https://czalbert6.github.io',
  
  // Nombre de tu repositorio: proyecto-login
  base: '/proyecto-login',
  
  // Static output para GitHub Pages
  output: 'static',
  
  // Configuración adicional
  build: {
    format: 'directory'
  }
});