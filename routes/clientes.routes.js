const express = require('express');

const router = express.Router();

const clienteController = require('../controllers/clientes.controller');

router.get('/clientes', clienteController.getClientes);

router.post('/clientes', clienteController.postCliente);

router.put('/clientes/:id', clienteController.putCliente);

router.delete('/clientes/:id', clienteController.deleteCliente);

module.exports = router;