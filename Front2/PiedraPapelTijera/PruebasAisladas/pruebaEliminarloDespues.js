<script>

var name = prompt("Ingresa tu nombre")

var text = document.createTextNode("Hola " + name)

var p = document.createElement("P")

text.appendChild(p)

document.body.appendChild(p)

</script> 
