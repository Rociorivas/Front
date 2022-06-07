const regexNombre = /^[a-zA-ZáÁéÉíÍóÓúÚ]{2,}(?: [a-zA-ZáÁéÉíÍóÓúÚ]{2,}){1,150}$/

const formulario = document.querySelector('form')
const botonSubmit = document.querySelector('form button')
const marcoHobbies = document.querySelector('#marcoHobbies')
const inputNombre = document.querySelector('#nombre')
const inputContrasenia = document.querySelector('#pass')
const inputTelefono = document.querySelector('#tel')
const checkBoxes = document.querySelectorAll('[name=hobbies]')
// const checkboxes = document.getElementsByName('hobbies');
const radioButons = document.querySelectorAll('[name=nacionalidad]')

const mensajeNombre = document.querySelector('#mensajeNombre')
const mensajeHobbies = document.querySelector('#mensajeHobbies')

// objeto auxiliar para datos
const datosUsuario = {
  nombre: '',
  contrasenia: '',
  telefono: '',
  hobbies: [],
  nacionalidad: ''
}

/* -------- lanzamos la validacion de nombre cuando salimos del input ------- */
inputNombre.addEventListener('blur', function () {
  datosUsuario.nombre = inputNombre.value
  // validar nombre
  if (!datosUsuario.nombre.match(regexNombre)) { // si su return es false
    mensajeNombre.classList.remove('oculto')
    inputNombre.classList.add('error')
  } else {
    mensajeNombre.classList.add('oculto')
    inputNombre.classList.remove('error')
  };
})

formulario.addEventListener('change', function () {
  console.log('cambio en el form')

  if (validarNombre(datosUsuario.nombre)) {
    console.log('todo OKKKK')
    botonSubmit.removeAttribute('disabled')
  } else {
    console.log('NOOOOOOOOO')
  }

  const listadoHobbies = []
  checkBoxes.forEach(hobbie => {
    if (hobbie.checked) {
      console.log(hobbie.id)
      listadoHobbies.push(hobbie.id)
    }
  })

  if (listadoHobbies.length > 4) {
    mensajeHobbies.innerText = 'Error. Elegiste más de 4 Hobbies'
    mensajeHobbies.classList.remove('oculto')
  } else if (((listadoHobbies.includes('hobbiesCocina') && listadoHobbies.includes('hobbiesVideoJuegos')) || (listadoHobbies.includes('hobbiesGuitarra') && listadoHobbies.includes('hobbiesLectura')) || (listadoHobbies.includes('hobbiesNetflix') && listadoHobbies.includes('hobbiesTejer')))) {
    mensajeHobbies.innerText = 'Error. Elegiste hobbies incompatibles'
    mensajeHobbies.classList.remove('oculto')
  } else {
    mensajeHobbies.innerText = ''
    mensajeHobbies.classList.add('oculto')
  }
  
  radioButons.forEach(button => {
    if (button.checked) {
      nacionalidad = button.id
      console.log(nacionalidad)
      if (nacionalidad === 'nacionalidadArgentina') {
        mensajeNacionalidad.classList.remove('oculto')
      } else {
        mensajeNacionalidad.classList.add('oculto')
      }
    }
  })
})

formulario.addEventListener('submit', function (event) {
  // frenamos el envío por defecto
  event.preventDefault()
  console.log('Submit')

  let nacionalidad
  radioButons.forEach(button => {
    if (button.checked) {
      nacionalidad = button.id
    }
  })

  // normalizar
  console.log(normalizar(inputNombre.value, inputContrasenia.value, inputTelefono.value, listadoHobbies, nacionalidad))

  // finalizar
  // formulario.reset();
})

function normalizar (nom, pass, tel, listado, pais) {
  const datos = {
    name: nom.toUpperCase(),
    password: pass,
    phone: tel,
    hobbies: listado,
    country: pais
  }

  return datos
}

function validarNombre (nombre) {
  let resultado = true

  const caracteresInvalidos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '-', ',']
  // validamos y mandamos true en caso de ser correcto
  // - debe tener un maximo de 20 caracteres y minimo de 3
  if (nombre.length < 3 || nombre.length > 20) {
    resultado = false
  }
  // - no debe contener un caracter invalido
  caracteresInvalidos.forEach(caracter => {
    if (nombre.includes(caracter)) {
      resultado = false
    }
  })

  return resultado
}
