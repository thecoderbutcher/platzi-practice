function soyAsincrona(callback){
    setTimeout(() => {
        console.log('Soy asincrona?')
        callback()
    }, 1000)
}

console.log("Init")
soyAsincrona(() => {console.log("End")})

function hola(nombre, callback){
    setTimeout(function() {
        console.log(`hola ${nombre}`); 
        callback();
    }, 1500)
}
function adios(nombre, callback){
    setTimeout(function() {
        console.log(`adios ${nombre}`); 
        callback();
    }, 600)
}
hola('carlos', () => {adios('pedro',() => {})})

// Callback hell recursion solution

function hello(name, callback){
    setTimeout(() => {
        console.log(`Hello ${name}`);
        callback(name);
    },1000)
}

function talks(callback){
    setTimeout(() => {
        console.log("bla bla bla");
        callback();
    }, 1000);
}

function goodbye(name, callback){
    setTimeout(() => {
        console.log(`Goodbye ${name}`)
        callback()
    }, 1000)
}

function conversation(name, times, callback){
    if(times === 0){
        goodbye(name, callback)
    }
    else{
        talks(() =>{
            conversation(name, --times, callback)
        })
    }
}

console.log("[Init]")
hello('Teddy', (name) => {
    conversation(name, 4, () => {
        console.log("[End]")
    })
})