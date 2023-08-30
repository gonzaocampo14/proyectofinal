var pool = require('./bd');

async function getNovedades() {
        var query = 'select * from novedades';
        var rows = await pool.query(query);
        return rows;
}

async function getNovedadesById(id) {
        var query = 'select * from novedades where id = ?';
        var rows = await pool.query(query, [id]);
        return rows[0];
}

async function insertNovedad(obj) {
        try {
                var query = "insert into novedades set ?";
                var rows = await pool.query(query, [obj]);
                return rows;
        } catch (error) {
                throw error;
        }
}

async function modificarNovedad(obj, id) {
        try {
                var query = 'update novedades set ? where id=?';
                var rows = await pool.query(query, [obj, id]);
                return rows;
        } catch (error) {
                throw error;
        }
}

async function deleteNovedad(id) {
        var query = 'delete from novedades where id = ?';
        var rows = await pool.query(query, [id]);
        return rows;
}

module.exports = { getNovedades, insertNovedad, deleteNovedad, getNovedadesById, modificarNovedad }
