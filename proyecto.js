//Exporta las librerias 
const express = require('express');
const app = express();

//llama la libreria para registrar la ruta de los archivos 
app.use(express.static(__dirname + '/public/'));

//levanta el servicio en el puerto indicado 
app.listen('3000', function() {
  console.log('Server is running on http://localhost:3000');
});
