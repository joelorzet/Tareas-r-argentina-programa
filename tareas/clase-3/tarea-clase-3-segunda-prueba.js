// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//EN CASO DE COMENTAR ESTE CODIGO, POR FAVOR NO COMENTAR LA CONSTANTE "userName"
//YA QUE LA ESTOY REUTILIZANDO EN LA TERCER TAREA.

//se agrega un string vacio para evitar que si el usuario apreta escape o enter nos devuelva null.
//ya que con null no podemos pasar propiedades de strings
function capitalizeName(name) {
	return name.charAt(0).toUpperCase() + name.slice(1);
}

const adminName = 'Joel'.toLowerCase();
const relativeName = 'Fernando'.toLowerCase();
const adminAge = 26;
const EDAD_PARA_ENTRAR = 18;
const RESPUESTA_NO = 'No'.toLowerCase();
const RESPUESTA_SI = 'Si'.toLowerCase();
const userNameV = (prompt('Ingrese su nombre') || '').trim().toLowerCase();

function nameValidator() {
	if (userNameV === adminName) {
		console.log(`Hola, Tocayo! Yo tambien me llamo ${capitalizeName(userNameV)}`);
	} else if (userNameV === relativeName) {
		console.log(`Hola ${capitalizeName(userNameV)}, te llamas igual que mi pariente!`);
	} else {
		console.log(`Hola ${capitalizeName(userNameV)}`);
	}
}
//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function ageValidator() {
	const userAge = Number(prompt('Ingrese su edad por favor'));

	if (userAge > adminAge) {
		console.log(`Se ve que eres mayor que yo!`);
	} else if (userAge < adminAge && userAge > 0) {
		console.log(`Se ve que eres menor que yo!`);
	} else if (userAge === adminAge) {
		console.log(`Vaya ${capitalizeName(userNameV)}, se ve que tenemos la misma edad!`);
	} else {
		console.log(`No comprendi, por favor vuelva a intentarlo`);
		return ageValidator();
	}
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function userIDValidator() {
	const idValidation =
		prompt(`Usted posee identificación? Responda con Si o con No segun corresponda`).trim().toLowerCase() ||
		'';

	if (idValidation === RESPUESTA_SI) {
		const userAge = Number(prompt('Ingrese su edad por favor'));

		if (userAge > EDAD_PARA_ENTRAR) {
			console.log(`Bienvendio ${capitalizeName(userNameV)}, que tenga una buena noche.`);
		} else if (userAge < EDAD_PARA_ENTRAR) {
			console.log(`Disculpe ${capitalizeName(userNameV)}, no puede ingresar debido a que es menor.`);
		} else {
			console.log(`Disculpe, no entendi. Puede repetirlo?`);
			return userIDValidator();
		}
	} else if (idValidation === RESPUESTA_NO) {
		console.log(`Disculpe señor, ustes es menor y no puede ingresar`);
	} else {
		console.log(`Disculpe, no entendi. Puede repetirlo?`);
		return userIDValidator();
	}
}

nameValidator();
ageValidator();
userIDValidator();
