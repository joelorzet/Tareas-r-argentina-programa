const numerosLi = document.querySelectorAll('li');

const array = [];
let aPromediar = 0;

for (let i = 0; i < numerosLi.length; i++) {
	array.push(Number(numerosLi[i].innerText));
}

function calcularNumeroGrande(array) {
	let numeroGrande = -Infinity;

	for (let i = 0; i < array.length; i++) {
		if (numeroGrande < array[i]) {
			numeroGrande = array[i];
		}
	}

	return numeroGrande;
}

function calcularNumeroPequenio(array) {
	let numeroPequenio = Infinity;

	for (let i = 0; i < array.length; i++) {
		if (numeroPequenio > array[i]) {
			numeroPequenio = array[i];
		}
	}
	return numeroPequenio;
}

for (let i = 0; i < array.length; i++) {
	aPromediar += array[i];
}

const numeroPequenio = calcularNumeroPequenio(array);
const numeroGrande = calcularNumeroGrande(array);

const body = document.querySelector('body');
const emPreCreated = document.createElement('em');
const emToShow = document.createTextNode(`El Promedio es ${aPromediar / array.length}`);

const divParaTexto = document.createElement('div');
const divParaTexto2 = document.createElement('div');
const divParaTexto3 = document.createElement('div');

const emTextNumeroPequenio = document.createElement('em');
const textNumeroPequenio = document.createTextNode(`El número mas pequeño es ${numeroPequenio}`);
const emTextoNumeroGrande = document.createElement('em');
const textoNumeroGrande = document.createTextNode(`El número mas grade es ${numeroGrande}`);

emPreCreated.appendChild(emToShow);
divParaTexto.appendChild(emPreCreated);
body.appendChild(divParaTexto);

emTextNumeroPequenio.appendChild(textNumeroPequenio);
divParaTexto2.appendChild(emTextNumeroPequenio);
body.appendChild(divParaTexto2);

emTextoNumeroGrande.appendChild(textoNumeroGrande);
divParaTexto3.appendChild(emTextoNumeroGrande);
body.appendChild(divParaTexto3);
