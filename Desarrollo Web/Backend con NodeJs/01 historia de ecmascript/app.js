// spread operator
let person = { name: 'nacho', age:20}
let country = 'arg'

let data = {id: 1,...person, country}

console.log(data)

// Rest parameter
function sum (num, ...values){
    console.log(values)
    return num + values[0]
}

console.log(sum(1,2,3,4))

//Ejercicio
function solution(
    json1 = { name: 'Mr. Michi', food: 'Pescado', },
    json2 = { age:12, color: 'Blanco',}
) {
    return { ...json1, ...json2 };
}  

console.log( solution())

//-----------------
// Object literals
function newUser(user, age, country){
    return { user, age, country, id: 1}
}

console.log(newUser('user12', 12, 'Arg'))

//promises
const af = () => {
    return new Promise((resolve, reject) => {
        (!true) ? resolve('yay') : reject('uh');
    })
}

af()
    .then(response => console.log(response))
    .catch(err => console.log(err));

// Class 
//declarando
class User {
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    //Metodos
    greeting(){
        return `${this.name} say: Hello class world`
    }
    
    get Age(){
        return this.age;
    }
    set Age(age){
        this.age = age;
    }
}

//instanciando
const newUser = new User('LOL',13);

console.log(newUser.greeting());

console.log(newUser.Age);
newUser.Age = 3;
console.log(newUser.Age);