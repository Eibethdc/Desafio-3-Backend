import pool from "../config/db.js";

export const addPost = async (titulo, img, descripcion) => {
    const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4) returning *"
    const values = [titulo, img, descripcion, 0]

    try {
        const results = await pool.query(consulta, values)
        return results.rows
    } catch (error) {
        console.log(error.message)
    }
}

export const getData = async () =>{
    try{
        const result = await pool.query('SELECT * FROM posts')
        return result.rows
    }catch(error){
        console.log(error.message)
    }
}