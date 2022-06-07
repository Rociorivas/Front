// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};
const regexEmail =/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
const contra = document.getElementById("contraseña");
const inicioSesion = document.querySelector('.login-btn');
const validandoEmail = document.getElementById("email");
const loader = document.querySelector("#loader");
let acceso = false;


// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

inicioSesion.addEventListener('click', function (){ 
  loader.classList.remove("hidden");

setTimeout(loader.innerHTML('iniciando sesion'), 3000 );

 
if (acceso === true) {
  (loader.innerHTML = `<h1> Bienvenido al sitio 😀 </h1>`)
  
  
}
else  {
  loader.innerHTML = `<small>Alguno de los datos ingresados son incorrectos</small>`};
})

//2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.



// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:

// 1) Que el primer input sea un email válido.

function validarEmail(valor) {
  if (regexEmail.test(valor)){
   console.log("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
}

validandoEmail(email)

//2) Que la contraseña tenga al menos 5 caracteres.
function longitudContraseña(password) {
  if (password.length < 5) {
    console.log ("la contraseña debe tener al menos 5 caracteres")
  }
}
longitudContraseña(contra)

// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"







// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
