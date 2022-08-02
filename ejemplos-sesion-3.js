// Ejemplo 1 ----------------------------------------------------
/*
const numbers =[1,2,3,4,7,2,1,9,0]
const doubled =[]

for(let i=0; i < numbers.length; i++){
  doubled.push(numbers[i] * 2)
}

console.log(numbers);
console.log(doubled);
*/


// Ejemplo 2 ----------------------------------------------------
/*
const car ={
  brand: 'Nissan',
  model: 'verssa',
  year: 2020
}  // [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]

const keys = Object.keys(car)
const pairs = []

for(let i = 0; i < keys.length; i++) {
  pairs.push( [keys[i], car[keys[i]]] )
}

console.log(pairs)
*/
// [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]


// Ejemplo 3 ----------------------------------------------------
/*
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const { firstName, country = 'Unknown' } = person;
console.log(firstName, country); // John Unknown
*/

/*
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const { firstName: name } = person;

console.log(name); */ // John* 

/*
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const { firstName: name,  country: ctry = 'Unknown'} = person;
console.log(name, ctry); */ // John Unknown


// RETO 1  ---------------------------------------------------------------
/*
const numbers = [5,3,4,7,2,1,9,7,7]
let suma = 0
for(let i=0; i<numbers.length; i++){
 //console.log(numbers[i])
 suma = suma + numbers[i]
 //console.log(suma)
}

console.log(suma/numbers.length)
*/


// RETO 2  ---------------------------------------------------------------
/*
const car = {
  brand: 'Nissan',
  model: 'Versa',
  year: 2020
}

const keys = Object.keys(car)
const pairs = []

for(let i = 0; i < keys.length; i++) {
  pairs.push( [keys[i], car[keys[i]]] )
}

console.log(pairs)

const auto ={}

for (let i =0; i < pairs.length; i++){
  auto[pairs[i][0]] = pairs[i][1];
}
console.log(auto)
*/
// auto [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]


//RETO 3  ------------------------------------------------------------------
/* const person = {
  firstName: 'John',
  lastName: 'Doe',
  links: {
    web: {
      blog: 'https://johndoe.com'
    }, 
    social: {
      facebook: 'https://facebook.com/john.doe',
      instagram: 'https://instagram.com/john.doe'
    } 
  }
}

const {links: 
        {social: 
          {facebook:fb,instagram:ig } 
        } 
      } = person

console.log( "Facebook:",fb,"instagram:",ig)  */