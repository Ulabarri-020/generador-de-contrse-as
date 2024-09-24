let cantidad= document.getElementById('cantidad');
let boton =document.getElementById('generar');
let contraseña=document.getElementById('contrasena');
const cadenaCaracteres=('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/`~');
function generar(){
    let numeroDigitado=parseInt (cantidad.value);
    if(numeroDigitado<8){
        alert("la cantidad de caracteres de ser mayor a 8");
        limpiar();


    }
    else{
         let password='';
    for(let i=0;i<numeroDigitado;i++){
        let caracteresAletorios= cadenaCaracteres[Math.floor(Math.random()*cadenaCaracteres.length)];
        console.log(caracteresAletorios);
        password+=caracteresAletorios;

    }
    console.log(password)
    contraseña.value=password;  
    validarContraseña(password);
    }
 
    
}
function limpiar(){
    let cantidad= document.getElementById('cantidad').value=" ";
    let contraseña=document.getElementById('contrasena').value=" ";

}

function validarContraseña(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*()_+\-=[\]{}|;:,.<>?/`~]/.test(password);

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial) {
        alert("Contraseña fuerte");
    } else {
        alert("Contraseña débil: Debe incluir al menos una mayúscula, una minúscula, un número y un carácter especial");
    }
}









