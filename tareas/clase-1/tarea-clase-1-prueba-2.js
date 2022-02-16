// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

function mostrarEdadUsuario(anioActual, anioNacimiento) {
    return anioActual - anioNacimiento;
}

const anioActual = Number(prompt('En que año estamos?'));
const anioNacimiento = Number(prompt('En que año naciste?'));

console.log('Tu edad actual es ' + mostrarEdadUsuario(anioActual, anioNacimiento));

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

function calcularSalarioAnual(salarioMensual){
    const mesesAnio = 12;
    return salarioMensual * mesesAnio;
}

function calcularSalarioMensual(salarioAnual){
    const mesesAnio = 12;
    return salarioAnual / mesesAnio;
}

function calcularSalarioSemanal(salarioAnual){
    const semanasAnio = 52;
    return salarioAnual / semanasAnio;
}

function calcularSalarioDiario(salarioAnual){
    const diasAnio = 365;
    return salarioAnual / diasAnio;
}

const salarioAnualUsuario = Number(prompt('Cuánto ganás anualmente?'));
const salarioMensualUsuario = Number(prompt('Cuánto ganás mensualmente?'));

console.log('Tu salario Anual es ' + calcularSalarioAnual(salarioMensualUsuario));
console.log('Tu salario mensual es ' + calcularSalarioMensual(salarioAnualUsuario));
console.log('Tu salario semanal es ' + calcularSalarioSemanal(salarioAnualUsuario));
console.log('Tu salario diario es ' + calcularSalarioDiario(salarioAnualUsuario)); 