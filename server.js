const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
