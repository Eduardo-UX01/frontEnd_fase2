// Reto 1  -----------------------------------------------

/* var singers = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, propertyName) {
  let valores =[]
  for (let i = 0; i < list.length; i++){
    valores.push(list[i][propertyName])
  }
  return valores
}

console.log( pluck(singers, 'name') );
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log( pluck(singers, 'band') );
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964] */


// Reto 2 ---------------------------------------------------

/* let notPositiveNumbers = function(telefono){
  
  // let isNegativeNum = false
  
  // for(const value of telefono){
  //   isNegativeNum = (typeof value !== "number"? true : (value >= 0)? false : true) // Regresa false es numero positivo
  //   console.log (value,isNegativeNum)
  //   if (isNegativeNum) break    // Termina el ciclo si No es numero positivo
  // }
  
  // return isNegativeNum

  for(const value of telefono){
  
    //console.log (value) // Para observar las iteraciones y valores
    if (typeof value !== "number"? true : (value >= 0)? false : true) return true
  
  }
  return false
}

let createPhoneNumber = function(telefono){
  
  if (telefono.length !== 10 || notPositiveNumbers(telefono)){ // Error first
    return "Deben ser 10 digitos numericos positivos"
  }
  else{
    telefono = telefono.join("") // convierte enteros a string y elimina las comas
    return( `(${telefono[0]}${telefono[1]}${telefono[2]}) ${telefono[3]}${telefono[4]}${telefono[5]}-${telefono[6]}${telefono[7]}${telefono[8]}${telefono[9]}` )
  }
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) */  // "(123) 456-7890"


// Reto 3 --------------------------------------------------

function findMissingNumbers(numbers) {
  
  const sortedArray = numbers.sort((a, b) => a - b)
  let missing = []
  
  for (let i = numbers[0]; i < numbers[sortedArray.length - 1]; i++) {
    //console.log(i,sortedArray.indexOf(i)) //  Regresa el primer indice en el que un elemento dadoes encontrado en el arreglo, o -1 si no esta en el
    if (sortedArray.indexOf(i) < 0) {
      missing.push(i);
    }
  }
  return missing
}

console.log( findMissingNumbers([2, 1, 9, 5, 7, 3, 10]) ) // [4, 6, 8]