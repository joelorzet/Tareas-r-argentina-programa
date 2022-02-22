/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $agregar = document.querySelector('#agregar-grupo');
const $limpiarCampos = document.querySelector('#agregar-grupo');
const grupoFamiliar = document.querySelector('.grupo-familiar');
const $calcular = document.querySelector('#calcular');
const resultados = document.querySelector('.resultados');

$agregar.onclick = function () {
	const cantidadIntegrantes = Number(document.querySelector('#grupo-familiar').value);
	agregarCampos(cantidadIntegrantes);
	return false;
};

$calcular.onclick = function () {
	const edades = document.querySelectorAll('#integrante');
	const numeroIntegrantes = cantidadIntegrantes(edades);
	const $resultados = document.querySelector('.resultados');

	const textoMayorDeEdad = document.createTextNode(
		`La persona que más edad posee tiene ${maximumNumber(edades)} años.`
	);
	const textoMenorDeEdad = document.createTextNode(
		`La persona mas joven tiene ${minimumNumber(edades)} años.`
	);
	const $promedioEdades = document.createTextNode(
		`El promedio de las edades es ${calcularPromedio(
			sumatoriaEdades(edades),
			cantidadIntegrantes(edades)
		).toFixed(2)} años.`
	);
	const crearElementoContenedor = document.createElement('p');
	const crearSegundoElementoContenedor = document.createElement('p');
	const crearTercerElementoContenedor = document.createElement('p');

	crearElementoContenedor.appendChild(textoMayorDeEdad);
	crearSegundoElementoContenedor.appendChild(textoMenorDeEdad);
	crearTercerElementoContenedor.appendChild($promedioEdades);

	$resultados.appendChild(crearElementoContenedor);
	$resultados.appendChild(crearSegundoElementoContenedor);
	$resultados.appendChild(crearTercerElementoContenedor);

	console.log(cantidadIntegrantes(edades));
	console.log(calcularPromedio(sumatoriaEdades(edades), numeroIntegrantes));

	return false;
};

function agregarCampos(cantidad) {
	for (let i = 1; i <= cantidad; i++) {
		const div = document.createElement('div');
		const label = document.createElement('label');
		const input = document.createElement('input');
		const textLabel = `Edad del integrante #${i} `;
		const divClass = 'familiares';

		divConfig(div, divClass);
		labelConfig(label, textLabel);
		inputConfig(input);

		div.appendChild(label);
		div.appendChild(input);

		grupoFamiliar.appendChild(div);
	}
}

function inputConfig(input) {
	input.id = `integrante`;
	input.type = 'number';
	input.placeholder = 'Ingrese su edad';
}

function labelConfig(label, text) {
	label.innerText = text;
}

function divConfig(div, divNewClass) {
	div.className = divNewClass;
}

function calcularPromedio(sumatoriaEdades, cantidadIntegrantes) {
	return sumatoriaEdades / cantidadIntegrantes;
}

function cantidadIntegrantes(array) {
	let integrantes = 0;

	for (let i = 0; i < array.length; i++) {
		if (Number(array[i].value) > 0) {
			integrantes++;
		}
	}

	return integrantes;
}

function sumatoriaEdades(edades) {
	let sumatoriaEdades = 0;

	for (let i = 0; i < edades.length; i++) {
		sumatoriaEdades += Number(edades[i].value);
	}
	return sumatoriaEdades;
}

function maximumNumber(array) {
	let maximum = -Infinity;

	for (let i = 0; i < array.length; i++) {
		const number = Number(array[i].value);

		if (maximum < number) {
			maximum = number;
		}
	}
	return maximum;
}

function minimumNumber(array) {
	let minimum = Infinity;

	for (let i = 0; i < array.length; i++) {
		const number = Number(array[i].value);

		if (minimum > number && number > 0) {
			minimum = number;
		}
	}
	return minimum;
}
