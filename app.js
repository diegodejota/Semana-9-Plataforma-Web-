require('./config/db');

const express = require('express');

const clientesRoutes = require('./routes/clientes.routes');

const app = express();

app.use(express.json());

app.use(clientesRoutes);

app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});