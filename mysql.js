const { error } = require('console')
const { errorMonitor } = require('events')
const mysql = require('mysql')

const conection = mysql.createConnection ({
    host:'localhost',
    user:'Juan',
    password: 'Juan12',
    database: 'registro-agencia'
})

conection.connect( (err) =>{
    if(err) throw err 
    console.log('Conexion exitosa')
} )

conection.query ('SELECT * from user', (err, rows) => {
    if(err) throw err
    console.log('Estos son los datos de la tabla')
    console.log(rows)
} )
