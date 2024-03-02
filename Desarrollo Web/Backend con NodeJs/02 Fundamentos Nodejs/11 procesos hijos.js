/* El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.

Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
Usa spawn cuando quieras recibir datos desde que el proceso arranca.
Usa exec cuando solo quieras recibir datos al final de la ejecución.
 */

const {exec, spawn} = require('child_process');

exec('ls -la', (err, stdout, sterr) => {
    if(err){
        console.log(err)
        return false
    }
    console.log(stdout)
})

exec('node "02 Fundamentos Nodejs/03 variable de entorno.js"', (err, stdout, sterr) => {
    if(err){
        console.log(err)
        return false
    }
    console.log(stdout)
})

let proceso = spawn('ls', ['-la'])
console.log(proceso.pid)
proceso.stdout.on('data', (dato) => {
    console.log(dato.toString())
    console.log(proceso.killed)
})

proceso.stdout.on('exit', () =>{
    console.log('el proceso termino')
})