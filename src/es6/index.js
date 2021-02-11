function nuevaFunction(name,age,countr){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
}

// es6

function nuevaFunction2(name='oscar',age=32,country='MX'){
    console.log(name,age,country);
}


nuevaFunction2();
nuevaFunction2('Juan','19','CO')


let hello = 'Hello';
let world = 'World';


let epicPhrase2 = `${hello}  ${world}`;

console.log(epicPhrase2);

// es6
let lorem = `otra frase épica que necesitamos 
ahora es otra frase épica
hola mundo, mi nombre es Juan Pablo
`;

console.log(lorem);

let person = {
    
    name: 'oscar',
    age: 32,
    country: 'mx'
}

console.log(person.name, person.age);

let {name, age, country} = person;

console.log(name,age,country);

let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria','Jessica','Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalVar = 'Goblal var';
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);



let name = 'juan';
let age = 32;

person = {name,age};
console.log(person);


const names = [
    { name: 'Juan', age:19},
    { name: 'Jessica', age:20},    
]

let listOfNames = names.map(item => console.log(item.name));

const listOfNames2 = (name,age,country) => {

}

const listOfNames3 = name => {

}

const square = num => num * num;


const helloPromise = () => {
    return new Promise((resolve,reject)=> {
        if (true){
            resolve('Hey');
        }else{
            reject('Ups!!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))

    .then(()=> console.log('hola'))

    .catch(error => console.log(error))


class calculator{

    constructor(){
        
    }

    sumar(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

var calculadora = new calculator();

var resultado = calculadora.sumar(3,2);

console.log(resultado);

import  { hello }  from './module';


function * helloworld(){
    if (true){
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
}

const generatorHello = helloworld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

console.log(generatorHello.next().value);
