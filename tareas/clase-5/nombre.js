const $enviarInformacion = document.querySelector('#enviar');

const $cleanForm = document.querySelector('#clear');

const saludoh1 = document.querySelector('h1').textContent;

function capitalizeName(name) {
	return name.charAt(0).toUpperCase() + name.slice(1);
}

$enviarInformacion.onclick = function () {
	const userName = document.querySelector('#primer-nombre').value;
	const userSName = document.querySelector('#segundo-nombre').value;
	const userLastName = document.querySelector('#apellido').value;
	const saludo = document.querySelector('h1');

	const saludoEcho = `Bienvenido ${capitalizeName(userName)} ${capitalizeName(userSName)} ${capitalizeName(
		userLastName
	)}!`;

	saludo.textContent = saludoEcho;

	return false;
};

$cleanForm.onclick = function () {
	const saludoRender = document.querySelector('h1');

	saludoRender.innerText = saludoh1;
};
