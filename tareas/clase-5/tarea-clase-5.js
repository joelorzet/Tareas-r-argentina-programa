/*
Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input

2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
También pueden usar .textContent, las diferencias no son importantes por ahora.

3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.

Ejemplo:
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function()
    // código que se ejecuta cuando le hagan click a este elemento...
    return false;
}
*/

//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function capitalizeName(name) {
	return name.charAt(0).toUpperCase() + name.slice(1);
}

const titleH1 = document.querySelector('h1');

console.log(titleH1);
console.log(titleH1.innerText);

titleH1.innerHTML = 'Título modificado para pruebas';

const mediaLink = document.querySelectorAll('li');

console.log(mediaLink);

for (let i = 0; i < mediaLink.length; i++) {
	console.log(mediaLink[i].innerText);
}

setInterval(function () {
	titleH1.innerText = String(Math.random().toFixed(4)).slice(2);
}, 1000);

const $butonIngresar = document.querySelector('#ingresar');

$butonIngresar.onclick = function () {
	const userName = document.querySelector('#userName').value;
	const userAge = Number(document.querySelector('#userAge').value);
	const userIDValidator = document.querySelector('#userIDValidator').value;

	const adminName = 'Joel'.toLowerCase();
	const relativeName = 'Fernando'.toLowerCase();
	const EDAD_MINIMA = 18;
	const RESPUESTA_AFIRMATIVA = 'si';
	const RESPUESTA_NEGATIVA = 'no';

	let nameAnswer;
	let respuesta;

	if (userName.toLowerCase() === adminName) {
		nameAnswer = `Hola Tocayo! Yo tambien me llamo ${capitalizeName(adminName)}`;
	} else if (userName.toLowerCase() === relativeName) {
		nameAnswer = `Hola ${capitalizeName(userName)} te llamas igual que mi pariente!`;
	} else {
		nameAnswer = `Hola ${capitalizeName(userName)}!`;
	}

	if (userIDValidator.toLowerCase() === RESPUESTA_AFIRMATIVA) {
		if (userAge >= EDAD_MINIMA) {
			respuesta = 'Hola, bienvenido. Que disfrute su noche!';
		} else {
			respuesta = 'Buenas noches, usted todavia es menor y no puede ingresar';
		}
	} else {
		respuesta = 'Disculpe, sin identificacion no puede ingresar.';
	}

	document.querySelector('.nameAnswer').innerText = nameAnswer;
	document.querySelector('.respuesta').innerText = respuesta;

	return false;
};
