var pool = require('./bd');

async function getGeneros(){
    try {
        let query = '';
        query += 'SELECT * FROM generos WHERE inactivo = 0 ORDER BY nombre';

        const rows = await pool.query(query);
        console.log('generos:', rows);
        return rows;
    } catch(error){
        console.log(error);
    }
}

async function insertJuego(obj){
    try {
        let query = '';
        query += 'INSERT INTO juegos SET ?';

        var rows = await pool.query(query, obj);
        
    } catch(error){
        console.log(error);
    }
}

async function getJuegos(){
    try {
        let query = '';
        query += 'SELECT';
        query += ' jue.*,';
        query += ' gen.nombre AS genero';
        query += ' FROM juegos AS jue';
        query += ' LEFT JOIN generos AS gen ON gen.id = jue.id_genero';
        query += ' WHERE jue.inactivo = 0 ORDER BY jue.nombre';

        const rows = await pool.query(query);
        return rows;
    } catch(error){
        console.log(error);
    }
}

async function getJuegoById(id){
    try {
        let query = '';
        query += 'SELECT';
        query += ' jue.*,';
        query += ' gen.nombre AS genero';
        query += ' FROM juegos AS jue';
        query += ' LEFT JOIN generos AS gen ON gen.id = jue.id_genero';
        query += ' WHERE jue.id = ?';

        const rows = await pool.query(query, [id]);
        return rows[0];
    } catch(error){
        console.log(error);
    }
}

async function deleteJuegoById(id){
    try {
        let query = 'DELETE FROM juegos WHERE (id = ?)';

        const rows = await pool.query(query, [id]);
        return rows;
        
    } catch(error){
        console.log(error);
    }
}

async function updateJuegoById(obj, id){
    try {
        let query = 'UPDATE juegos SET ? WHERE (id = ?)';

        await pool.query(query, [obj, id]);
        //return rows;
        
    } catch(error){
        console.log(error);
    }
}

module.exports = {getGeneros, insertJuego, getJuegos, getJuegoById, deleteJuegoById}