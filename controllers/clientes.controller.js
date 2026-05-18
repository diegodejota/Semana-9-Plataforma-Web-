const clienteModel = require('../models/clientes.model');

const getClientes = (req, res) => {

    clienteModel.obtenerClientes((error, resultados) => {

        if (error) {
            return res.status(500).json({
                mensaje: 'Error al obtener clientes'
            });
        }

        res.json(resultados);
    });
};

const postCliente = (req, res) => {

    const nuevoCliente = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    };

    clienteModel.crearCliente(nuevoCliente, (error, resultado) => {

        if (error) {

            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({
                    mensaje: 'El correo ya existe'
                });
            }

            return res.status(500).json({
                mensaje: 'Error al crear cliente'
            });
        }

        res.status(201).json({
            mensaje: 'Cliente creado correctamente',
            id: resultado.insertId
        });
    });
};


const putCliente = (req, res) => {

    const id = req.params.id;

    const clienteActualizado = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    };

    clienteModel.actualizarCliente(
        id,
        clienteActualizado,
        (error, resultado) => {

            if (error) {

                if (error.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({
                        mensaje: 'El correo ya existe'
                    });
                }

                return res.status(500).json({
                    mensaje: 'Error al actualizar cliente'
                });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensaje: 'Cliente no encontrado'
                });
            }

            res.json({
                mensaje: 'Cliente actualizado correctamente'
            });
        }
    );
};

const deleteCliente = (req, res) => {

    const id = req.params.id;

    clienteModel.eliminarCliente(id, (error, resultado) => {

        if (error) {
            return res.status(500).json({
                mensaje: 'Error al eliminar cliente'
            });
        }

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensaje: 'Cliente no encontrado'
            });
        }

        res.json({
            mensaje: 'Cliente eliminado correctamente'
        });
    });
};

module.exports = {
    getClientes,
    postCliente,
    putCliente,
    deleteCliente
}; 