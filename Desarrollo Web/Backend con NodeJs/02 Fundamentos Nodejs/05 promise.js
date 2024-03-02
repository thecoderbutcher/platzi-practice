function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`hola ${nombre}`);
            resolve(nombre);
        }, 1000)
    })
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${nombre} say : bla bla bla`)
        }, 1000);
    })
}
function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`adios ${nombre}`)
            resolve()
        })
    })
}

console.log('init')
hola('nala')
    .then(hablar)
    .then(adios)