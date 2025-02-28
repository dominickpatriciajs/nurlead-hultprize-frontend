/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/nurlead-hultprize-frontend", // 👈 Reemplaza con el nombre de tu repositorio
    images: {
      unoptimized: true, // 👈 Necesario para exportar imágenes en Next.js
    },
  };
  
  module.exports = nextConfig; 