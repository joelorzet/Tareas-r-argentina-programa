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

const userName = (prompt('Ingrese su nombre por favor') || '').trim().toLowerCase();
const adminName = 'Joel'.toLowerCase();
const relativeName = 'Fernando'.toLowerCase();

if (userName === adminName) {
	console.log(`Hola Tocayo! Yo tambien me llamo ${capitalizeName(adminName)}`);
} else if (userName === relativeName) {
	console.log(`Hola ${capitalizeName(userName)} te llamas igual que mi pariente!`);
} else {
	console.log(`Hola ${capitalizeName(userName)}!`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const userAge = Number(prompt('Por favor ingrese su edad'));
const adminAge = 26;

if (userAge > adminAge) {
	console.log(`Bueno ${capitalizeName(userName)} se ve que eres mayor que yo.`);
} else if (userAge < adminAge) {
	console.log(`Bueno ${capitalizeName(userName)} se ve que eres menor que yo.`);
} else {
	console.log(`Aparentemente tenemos la misma edad! Que casualidad, cierto ${capitalizeName(userName)}?`);
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

//ACLARACIÓN: POR PEDIDO DEL EJERCICIO VUELVO A PEDIR LA EDAD AUNQUE MI IDEA ORIGINAL
//ERA REUTILIZAR LA MISMA QUE YA PEDIA AL COMIENZO.
//ADEMAS FUE UNA BUENA OPORTUNIDAD DE PONER EN PRACTICA EL CONCEPTO DE SCOPE YA QUE
//"userAge"(dentro del if) TIENE EL MISMO NOMBRE QUE "userAge" EL CUAL SE ENCUENTRA EN EL
//ÁMBITO GLOBAL

const userIDValidation = prompt(
	'Usted posee documento? Por favor responda con "si" o "no"' || ''
).toLowerCase();

const EDAD_PARA_ENTRAR = 18;
const RESPUESTA_SI = 'si';
const RESPUESTA_NO = 'no';

if (userIDValidation === RESPUESTA_SI) {
	const userAge = Number(prompt('Por favor ingrese su edad!'));

	if (userAge >= EDAD_PARA_ENTRAR) {
		console.log(`Bienvenido ${capitalizeName(userName)}, que tenga una buena noche.`);
	} else if (userAge < EDAD_PARA_ENTRAR) {
		console.log(`Disculpe, usted es menor y todavia no puede ingresar.`);
	} else {
		console.log(
			`Disculpe señor/a ${capitalizeName(
				userName
			)}, no comprendimos lo que intentó decirnos, puede repetirlo?`
		);
	}
} else if (userIDValidation === RESPUESTA_NO) {
	console.log(`Disculpe señor/a ${capitalizeName(userName)}, sin identificacion no podemos dejarlo/a pasar.`);
} else {
	console.log('Disculpe señor/a, no comprendi la respuesta.');
}

/* esto lo puedo hacer tambien encerrando cada ejercicio en funciones y ejectuandolo mas tarde

queda para hacerlo cuando tenga tiempo! */
