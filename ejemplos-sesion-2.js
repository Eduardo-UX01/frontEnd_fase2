//ejercicio 1 ---------------------------------------------------------

const time = 25;
let greeting;
/*
if (time < 24 && time >= 0){

  if (time < 12){
    greeting = 'Buenos dias'
  }
  else if (time < 19){
    greeting = 'Buenos tardes'
  }
  else if (time >= 19){
    greeting = 'Buenos noches'
  }
}
else{
    greeting = 'hora NO valida'
}

console.log(greeting);
*/


//Ejercico 2 ---------------------------------------------------------

/*const day = 8;
let texy;

switch (day){
  case 1: 
    text = 'Monday'
    break;
  case 2: 
    text = 'Tuesday'
    break;
  case 3: 
    text = 'Monday'
    break;
  case 4: 
    text = 'Monday'
    break;
  case 5: 
    text = 'Monday'
    break;
  case 6: 
    text = 'Monday'
    break;
  case 7: 
    text = 'Monday'
    break;
  default:
    text = 'Valor Invalido'
}

console.log(text);
*/


//Ejercico 3 -----------------------------------------------------------

/*let message;


if (speed > 100){
  message = 'vas muy rapido'
}
else{
  message = 'vas por debajo del limite'
}


message = speed > 100 ? 'Vas muy rapido' : 'vas por debajo del limite';

//const isFast = speed > 100 ? true : false;
const isFast = speed > 100;

console.log(message);
console.log('En verdad vas muy rapido?', isFast);
*/


//Ejercicio 4 ----------------------------------------------------------

/*
for (let index = 0; index < 101; index++){
   if (index === index) continue
   console.log('Hello world! repetición:', index);
}
*/

//Reto 1 ---------------------------------------------------------------
/*for (let index = 0; index <= 100; index++){
  //if (index%2 === 0) console.log('Numero par', index);
  if (!(index%2)) console.log('Numero par', index);
}
*/


// Reto 3 --------------------------------------------------------------
for (let numero = 0; numero <= 100; numero++){
  let isPrimo = true; //Esta es una bandera
  
  for (let compara = 2; compara <= numero; compara++){
    
    if(numero%compara === 0 && compara !== numero){ 
      isPrimo = false;
    }

  }
  if (isPrimo) console.log('Numero primo:', numero);
}

