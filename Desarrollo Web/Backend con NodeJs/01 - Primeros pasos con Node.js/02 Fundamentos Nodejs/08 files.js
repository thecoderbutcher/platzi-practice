const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
    });
}
leer(__dirname + '/08 files.txt', () => { console.log()})

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        err ? console.log("no se pudo escribir"): console.log('se ha escrito correctamente')
    })
} 

escribir(__dirname + '/08 files.txt', 'a tu perro lo convierto en mi gato',()=> {console.log('first')})

leer(__dirname + '/08 files.txt', () => { console.log()})

function eliminar(ruta, cb){
    fs.unlink(ruta, cb)
}

eliminar(__dirname+'/08 files.txt', () => {})