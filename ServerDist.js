const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos del navegador
app.use(express.static(path.join(__dirname, 'dist/omnia/browser')));

/* Manejar solicitudes al servidor
app.get('/api/data', (req, res) => {
  // Lógica para manejar la solicitud de datos de la API
});
*/

// Enviar todas las demás solicitudes al index.html para Angular Universal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/browser/index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

