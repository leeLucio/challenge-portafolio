const inputs = document.querySelectorAll(".input");
const inputMensaje = document.querySelectorAll(".input-mensaje");

inputs.forEach((input) => {
	input.addEventListener("blur", (input) => {
		validar(input.target);
	});
});


function validar(input) {
	const tipoDeInput = input.id;
	if (input.validity.valid) {
		input.parentElement.classList.remove("input-container--invalid");
		input.parentElement.querySelector(".input-message-error").innerHTML = "";
	} else {
		input.parentElement.classList.add("input-container--invalid");
		input.parentElement.querySelector(".input-message-error").innerHTML =
			mostrarMensajeDeError(tipoDeInput, input);
	}
}

const tipoDeErrores = [
	"valueMissing",
	"typeMismatch",
	"patternMismatch",
];

const mensajesDeError = {
	nombre: {
		valueMissing: "El campo nombre no puede estar vacío",
	},
	email: {
		valueMissing: "El campo no puede estar vacío",
		typeMismatch: "Formato de correo no es válido",
	},
	asunto: {
		valueMissing: "El campo asunto no puede estar vacío",
	},
	mensaje: {
		valueMissing: "Este campo no puede estar vacio",
		patternMismatch: "No cuumple el formato requerido"
	}
};

function mostrarMensajeDeError(tipoDeInput, input) {
	let mensaje = "";
	tipoDeErrores.forEach((error) => {
		if (input.validity[error]) {
			console.log(mensajesDeError[tipoDeInput][error]);
			mensaje = mensajesDeError[tipoDeInput][error];
		}
	});
	return mensaje;
}