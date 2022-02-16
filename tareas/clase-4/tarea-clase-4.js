/* como escribir un ciclo for o while

for( i=0; i<=5; i++){               punto de partida (tambien se puede hacer un let = i o declarar el punto
    console.log(i)                  antes del ciclo for, condicion, contador o paso, i++, i = i+1, o i += 1..
}                                   cualquiera son validos).


while  =>   se declara el punto de partida antes del ciclo... 
            se inicia el ciclo while y se pone la condicion en parentesis
            se abren corchetes para lo que tenemos que ejecutar si se cumple la condicion

let i = 0;

while(i <= 5){              => condicion y se abren corchetes para la ejecucion del programa
    console.log(i);         => lo que se ejecuta si se cumple la condicion.
}
*/

// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for (let i = 3; i <= 22; i += 3) {
	console.log(i);
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

let numero = 10;

while (numero > 0) {
	console.log('Registro nro ' + numero);
	numero -= 1;
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

const arrayFizzBuzz = [];

for (let i = 1; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		arrayFizzBuzz.push('FizzBuzz');
	} else if (i % 3 === 0) {
		arrayFizzBuzz.push('Fizz');
	} else if (i % 5 === 0) {
		arrayFizzBuzz.push('Buzz');
	} else {
		arrayFizzBuzz.push(i);
	}
}
console.log(arrayFizzBuzz);

/* OPCIONAL FIZZBUZZ*/

function fizzBuzz() {
	for (let i = 1; i <= 50; i++) {
		let texto = '';

		if (i % 3 === 0) {
			texto = 'Fizz';
		}

		if (i % 5 === 0) {
			texto += 'Buzz';
		}

		console.log(texto || i);
	}
}

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function calcularPromedio(array) {
	let sumaPromedios = 0;
	for (let i = 0; i < array.length; i++) {
		sumaPromedios += array[i];
	}
	return sumaPromedios / array.length;
}

const notas = [10, 5, 7, 9, 8, 3, 9];

console.log(calcularPromedio(notas).toFixed(2));
