const parrafo = document.querySelector(".parrafito")
const input = document.querySelector("input")

input.addEventListener("click", function(){
    console.log("tocaste")
})
console.log({
    parrafo,input
})

console.log(parrafo.getAttribute("class"))
parrafo.setAttribute("class","Caja")

parrafo.classList.add("red");
parrafo.classList.remove("verde")
parrafo.classList.toggle("verde")

input.value = 465

const h1 = document.createElement("h1")
h1.innerText = "el cacas de h1"

parrafo.append(h1)

const c1 = document.querySelector("#c1")
const c2 = document.querySelector("#c2")
const btn = document.querySelector("#calcular")
const resutl = document.querySelector("#result")
btn.addEventListener("click", function(){
    const sum = c1.value + c2.value
    resutl.innerText = sum
})

const form = document.querySelector("#formcalc")
const r1 = document.querySelector("#in1")
const r2 = document.querySelector("#in2")
const fbtn = document.querySelector("#fbtn")
const fresutl = document.querySelector("#resultform")

form.addEventListener('submit', function(event){
    event.preventDefault()
    const r = r1.value + r2.value
    fresutl.innerText = r
})