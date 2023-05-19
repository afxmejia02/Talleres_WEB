/*function calcularEdad (){
    const fechaNacimiento = document.getElementById("nacimiento").value;
    console.log(fechaNacimiento);
const fechaActual = new Date();  
 const anoActual = parseInt(fechaActual.getFullYear()).value;
    const mesActual = parseInt(fechaActual.getMonth()).value + 1;
    const diaActual = parseInt(fechaActual.getDate()).value;

   
    const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4)).value;
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7)).value;
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10)).value;

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
   
};*/

function validarUsuario(){
        var regex = /^[a-zA-Z0-9]*$/;
        var esp=/[_]/;
        const username = document.getElementById("username").value.trim();
       // if(username.length === 0 ){
         // alert("Debe llenar este campo")
          //completado = false;
        //}

        //else{
          //completado=true;}
        if (!regex.test(username) && !esp.test(username)) {
          alert("No se permiten caracteres especiales, excepto " + "_");
          //completado=false;
        }
      
}

function validarClave() {

  var regexMayuscula = /[A-Z]/; 
  var regexNumero = /[0-9]/; 
  var regexEspeciales = /[#%&/_-]/;
const clave = document.getElementById("clave").value.trim();

/*if(clave.length === 0 ){
  alert("Debe llenar este campo")
  completado = false;
}
else{
  completado=true;
}*/

if (clave.length > 7 && regexMayuscula.test(clave) && regexNumero.test(clave) && regexEspeciales.test(clave)){
  //completado=false;
}
else{
alert("La contraseña debe ser de minimo 8 caracteres y minimo con mayúsculas , numeros, letras y/o los siguientes caracteres [#,%,/,&,_,-]");
}

}

function confirmarClave(){

   const clave = document.getElementById("clave").value.trim();
   const confirmacion = document.getElementById("confirmacion").value.trim();

   if(clave != confirmacion){
    alert("No coincide con la contraseña");
   }
}

function mostrarEnfermedades() {
  var select = document.getElementById("enfermedades");
  var divEnfermedades = document.getElementById("divEnfermedades");
  
  if (select.value === "si") {
    divEnfermedades.style.display = "block";
  } else {
    divEnfermedades.style.display = "none";
  }
}








   