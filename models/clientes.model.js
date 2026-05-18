const db = require('../config/db');

const obtenerClientes = (callback) => {

    const sql = 'SELECT * FROM cliente';

    db.query(sql, callback);
};

const crearCliente = (cliente, callback) => {

    const sql = `
        INSERT INTO cliente(nombre, email, telefono)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [cliente.nombre, cliente.email, cliente.telefono],
        callback
    );
};

const actualizarCliente = (id, cliente, callback) => {

    const sql = `
        UPDATE cliente
        SET nombre = ?, email = ?, telefono = ?
        WHERE id_cliente = ?
    `;

    db.query(
        sql,
        [cliente.nombre, cliente.email, cliente.telefono, id],
        callback
    );
};

const eliminarCliente = (id, callback) => {

    const sql = `
        DELETE FROM cliente
        WHERE id_cliente = ?
    `;

    db.query(sql, [id], callback);
};

module.exports = {
    obtenerClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente
};