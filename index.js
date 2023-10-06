//RESUELVE LOS EJERCICIOS AQUÍ

//1

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

let [ ,ana, ] = empleados

// 2

let [luis, , ] = empleados

let emailLuis = luis["email"] // luis.email

//3

let a = 5;
let b = 3;
[a, b] = [3, 5]


//4

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const {today, tomorrow} = HIGH_TEMPERATURES
const {today:maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES}

//const maximaHoy = HIGH_TEMPERATURES.today;
//const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);

//5
function sumEveryOther(...rest){
 let total=0
 for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
    return total
} 

//6

function addOnlyNums(...rest){
    let total=0
    for (let i = 0; i < rest.length; i++) {
        if (typeof rest[i] === "number") {
            total += rest[i]}
}  
    return total;
}

//7 
function countTheArgs(...rest){
    total= 0 
    for (let i = 0; i < rest.length; i++) {
       total++
       
}  
    return total;
}

//8

let array1 = [ 1,2,3]
let array2 = [ 4,5,6]

function combineTwoArrays(array1,array2){

    let nuevoArray=[...array1,...array2];

    return nuevoArray;
}

//9
function onlyUniques(...rest){
    
let result = rest.filter((repetidos,posicion)=>{
    return rest.indexOf(repetidos) === posicion; })
    
return result
}

/*9let data = (1,2,6,1,2,5,9,2,9); 
function onlyUniques(...rest){
    let newArray = new Set(rest);
    let result = [...newArray]
    return result;
}*/


//10

10./*- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

/*function combineAllArrays([...rest]){

    let nuevoArray=[...rest];

    return nuevoArray;*/


  function combineAllArrays (...rest){
    let total =[]
    for(let i=0; i<rest.length; i++){
     total = [...total,...rest[i]]
    }
    return total
 }

//11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

function sumAndSquare(...rest){

    let total= 0

 for (let i=0; i < rest.length; i++){

    total += rest[i]**2
 }
    return total
 }
