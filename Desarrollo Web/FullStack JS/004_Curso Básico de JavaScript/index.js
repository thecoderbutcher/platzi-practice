/*SCOPE*/
//Global
var nombre = "ANTON"

function local(){
    var apellido = "Loveing"
    console.log(apellido,nombre)
}
console.log(apellido) //error
local()

// HOISTING
//Cuando las variables y las funciones se declaran antes no se usa en versiones actuales

//COERCION
// CAMBIO DE VALORES PARA OPERARLOS CON LOS TIPOS CORRECTOS

//TRUTHY AND FALSY
//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también

//arrays
let frutas = ["manzanas","peras", "platanos","cereza"]

for(let fruta of frutas){console.log(fruta)} 
 