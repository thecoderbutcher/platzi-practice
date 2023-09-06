var articulos =  [
    {nombre : "bici", costo:3000},
    {nombre : "tv", costo:2500},
    {nombre : "libro", costo:320, bar: 1},
    {nombre : "celular", costo:10000},
    {nombre : "laptop", costo:20000, bar: 1},
    {nombre : "teclado", costo:500},
    {nombre : "audifonos", costo:1700, bar: 1}
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo < 1000
})
console.log(articulosFiltrados)

var nombresArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

console.log(nombresArticulos)

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
})

console.log(encuentraArticulo)

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
})
console.log(articulosBaratos)

var fil = articulos.filter(function(articulo){
    if(articulo.bar != null){
        return articulo
    }
})
console.log(fil)