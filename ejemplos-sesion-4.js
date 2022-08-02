
// Ejmplo 1  ---------------------------------------------------

/* function calculateAge(birthYear) {
  const age = 2020 - birthYear;
  return age;
}
const ageJohn = calculateAge(1995);

console.log(ageJohn); // 25

function yearsUntilRetirement(year, name) {
  const age = calculateAge(year);
  const retirement = 65 - age;
  console.log(`${name} retires in ${retirement} years.`);
}

yearsUntilRetirement(1995, 'John Doe');
 */

// Reto 1  -----------------------------------------------------

/*function power(base, exponent) {
  let result = 1

  for (let i=0; i < exponent; i++){
    result = result * base
  } 
  return(result)
}
console.log(power(3,3))*/


// Ejemplo 2  --------------------------------------------------

/* const whatDoYouDo = function(job, name) {
  switch (job) {
    case 'developer':
      return name + ' develops cool apps.';
    case 'designer':
      return name + ' designs awesome websites.';
    default:
      return name + ' does something else.'
  }
}

console.log(whatDoYouDo('developer', 'John Doe'));
console.log(whatDoYouDo('designer', 'Jane Doe'));
console.log(whatDoYouDo('retired', 'Mark Doe'));
 */

// Ejemplo 3  --------------------------------------------------

/*function logName() {
  const name = "John Doe";
  console.log(name);
}

logName(); // John Doe*/

// IIEF (sin argumento) -------------------------------------------------------

/* (function() {
  const name = "John Doe";
  console.log(name);
})();
 */

// IIEF (con argumento) -------------------------------------------------------

/* (function(lastName) {
  const firstName = "John";
  console.log(`${firstName} ${lastName}`);
})('Doe');
 */

// ARROW Functions  -----------------------------------------------------------

 /* const firstNames = [ 'John', 'Jane', 'Mark']; */

 /*// normal code
function getFullNames(names) {
  const fullNames = []
	
  for(const name of names) {
    fullNames.push(`${name} Doe`)
  }
  
  return fullNames
}
*/

// the arrow funtion of the code above
/* const getFullNames = names => {
  const fullNames = []
	
  for(const name of names) {
    fullNames.push(`${name} Doe`)
  }
  
  return fullNames
}

const fullNames = getFullNames(firstNames)

console.log(fullNames); // ["John Doe", "Jane Doe", "Mark Doe"] */ 

// Return Implicito  ---------------------------------------------------------

/* const logName = (name) => console.log(`Hello ${name}!`);
logName('John Doe'); // Hello John Doe! */

// Reto 2  -------------------------------------------------------------------

/*function getLergerInt(number1, number2) {
  return number1 > number2 ? number1 : number2;
}
console.log(getLergerInt(2,3))*/


// Reto 3  -------------------------------------------------------------------

 function fibonacciSequence(limit) {

  let fibonacciArray = [limit > 0 ? 1 : 0] 
  
  if (limit > 1){
    fibonacciArray.push(1)
    for (let i = 2; i < limit; i++){
      fibonacciArray.push(fibonacciArray[i-2] + fibonacciArray[i-1])
    }
  }

  return fibonacciArray
}

console.log(fibonacciSequence(0)) 
console.log(fibonacciSequence(1)) 
console.log(fibonacciSequence(2)) 
console.log(fibonacciSequence(3)) 
console.log(fibonacciSequence(4)) 
console.log(fibonacciSequence(5)) 