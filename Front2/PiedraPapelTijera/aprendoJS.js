const piedra = 1;
const papel= 2;
const tijera =3; 

let opcionUsuario = parseInt(prompt('¿piedra(1), papel(2) o tijera(3)?'));
let random = parseInt(Math.random()*3+1);
let opcionMaquina = random;
let resultado;


function quienGana(opcionUsuario, opcionMaquina) {
 

switch (opcionUsuario){

    case piedra:

    // opcionMaquina == piedra ? resultado = 'empate' : (opcion == papel ? resultado = 'derrota' : resultado = 'victoria')
    
    if(opcionUsuario==piedra)
        {
            if(opcionMaquina==piedra){
                resultado = 'empate';
            }
            if(opcionMaquina==papel){
                resultado = 'derrota';
            }
            if(opcionMaquina==tijera){
                resultado = 'victoria';
            }
           
        }
        break;
       
    case papel:
        
    if (opcionUsuario == papel) 
    {
        if (opcionMaquina == piedra) {
            resultado = 'victoria';
        }
        if (opcionMaquina == papel) {
            resultado = 'empate';
        }
        if (opcionMaquina == tijera) {
            resultado = 'derrota';
        }
 
    }
    break;
            

    case tijera:
        
    if (opcionUsuario == tijera)
     {
        if (opcionMaquina == piedra) {
            resultado = 'derrota';
        }
        if (opcionMaquina == papel) {
            resultado = 'victoria';
        }
        if (opcionMaquina == tijera) {
            resultado = 'empate';
        }
      
    }

    break;

}
return resultado;

}


quienGana(opcionUsuario, opcionMaquina);
console.log(opcionUsuario);
console.log(opcionMaquina);
alert(resultado);



