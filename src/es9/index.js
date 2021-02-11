const obj = {
    nombre: 'juan',
    age: 19,
    country: 'CO'
}


/* // SÓLO OBTENGO EL VALOR QUE NECESITO DEL OBJETO
// LA PALABRA ALL NOS AYUDA A TRAER LOS ATRIBUTOS RESTANTES DEL OBJETOS
 */
let {name, ...all} = obj;

console.log(name, all);

const obj = {
    name: 'Oscar',
    age: 29
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1);


//FINALLY
const helloWorld = () =>{
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(()=> resolve('Hello world'),3000)
            : reject(new Error('Test Erorr'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log('Finalizó'))

// acceder a las partes de una fecha    
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20'); 
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);
