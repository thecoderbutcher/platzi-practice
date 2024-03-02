async function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`hola ${nombre}`)
        }, 1000)
        resolve(nombre)
    })
}

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`adios ${nombre}`)
        }, 1000)
        resolve()
    })
}

async function main(){
    await hola('Nala')
     adios('nala')
}

main()