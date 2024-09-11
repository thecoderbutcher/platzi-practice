function* iterates (array) {
    for(let value of array){
        yield value
    }
}

const it = iterates(['a','b','c','d']);
console.log(it.next().value)
console.log(it.next().value)


function* getId(){
        yield Math.random();
  
}

const id = getId();

console.log(id.next().value)

//SET

const arr = [1,2,3,3,4,3,5,6,5,6]
const unique = [... new Set(arr)]

console.log(arr)
console.log(unique)