const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const multer = require('multer')
const path = require('node:path');
const { getQuery } = require('./Database.js');





const app = express();
const port = 3001;

app.use(cors());

/* Recibir datos */
app.post('/send-page', (req, res) => {
    const name = req.body.name;
    const descripcion = req.body.descripcion;
    console.log(name);
    console.log(descripcion)
    res.json({ message: 'POST request received successfully' });
  
  })
  
  /* Envio datos */
  
  app.get('/get-classesList', async(req, res) => {
    console.log("Entro");
    const text = 'SELECT * FROM classes;'
    const responseData = await getQuery(text);
    res.json(responseData);

  });
  app.get('/get-profesorList', async(req, res) => {
    const text = 'SELECT * FROM profesor;'
    const responseData = await getQuery(text);
    res.json(responseData);

  });

  app.get('/get-schedule', async(req, res) => {
    console.log("Entro");
    const text = 'SELECT * FROM schedule;'
    const responseData = await getQuery(text);
    res.json(responseData);

  });
  
  /*catch{
    console.error('Error fetching professors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }*/
  
  
  // Start the server
  app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
  });