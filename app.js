/**
 * - LA CLASE CONTROLS ALMACENA TODOS LOS INPUT DE LA APP QUE ESTÁN EN EL HTML.INDEX
 * - LA CLASE UIFUNCTIONS GUARDA TODOS LOS MÉTODOS QUE VA A USAR LA APP
 * - DENTRO DEL MÉTODO ADDUSER SE INSTANCIAN LAS CLASES CONTROLS 2 VECES Y UIFUNCTIONS UNA VEZ,
 *   LA 1 VEZ PARA OBTENER EL .VALUE DE TODOS LOS INPUTS, Y LA OTRA SOLO PARA LLAMAR AL INPUT DE
 *   VALIDAPASS Y VACIARLO CUANDO SU .VALUE NO COINCIDA CON EL .VALUE DE PASSWORD, LA CLASE UIFUNCTIONS 
 *   SE INSTANCIA PARA PODER LLAMAR EL MÉTODO RESETFORM Y VACIAR LOS INPUTS AL GUARDAR EL USUARIO
 * - SI LOS CAMPOS SON CORRECTOS LOS DATOS SE AGREGAN AL ARRAY USERARRAY[] Y SE RESETEAN LOS INPUTS
 * - EN EL MÉTODO LOGIN SE INSTANCIA DE NUEVO LA CLASE CONTROLS PARA COMPARAR LOS VALORES DEL NOMBRE Y
 *   LA CONSTRASEÑA CON LOS MISMOS VALORES ALMACENADOS EN EL ARRAY Y HACER EL LOGIN.
 * - DE ACUERDO A LA VALIDACIÓN DE LOS DATOS SE MOSTRARÁn MENSAJES EN MODALES USANDO EL MDN SWEETALERT 
 * - EL BTNSENDUSER INSTANCIA LA CLASE UIFUNCTIONS PARA USAR EL MÉTODO ADDUSER(), Y TAMBIÉN INSTANCIA
 *   LA CLASE CONTROLS PARA VALIDAR QUE LOS CAMPOS NO ESTÉN VACIOS AL MOMENTO DE AGREGAR UN USUARIO.
 *   SE HIZO UNA PEQUEÑA MEJORA PARA VALIDAR SI EL NOMBRE DE USUARIO O EL EMAIL YA EXISTEN EN EL ARRAY
 *   A TRAVÉS DE LA FUNCIÓN VALIDAUSERNAME PERO NO FUNCIONA CORRECTAMENTE
 * - EL BTNLOGIN INSTANCIA LA CLASE UIFUNCTIONS PARA USAR EL MÉTODO LOGIN() Y RESETFORM() 
 * - LA AUTENTICACIÓN EN OCASIONES ARROJA ERROR Y NO FUNCIONA COMO DEBERIA CON EL IF
 * 
 */

import Controls from "./Clases/Control Class.js"
import UIFunctions  from "./Clases/UI Class.js";
let btnsendUser = document.getElementById("enviarinfo");
btnsendUser.addEventListener("click", (e) => {
    e.preventDefault();
    let iufunctions = new UIFunctions();
    let emptyInputs = new Controls();
    let resp = true;
    if(emptyInputs.name.value == "" ||
         emptyInputs.email.value == "" ||
         emptyInputs.password.value == "" ||
         emptyInputs.validapass.value == ""){      
        iufunctions.validaInput() 
        //iufunctions.validaUserName()        
    }
    else{
        iufunctions.addUser()

    }
});

let btnlogin = document.getElementById("validarinfo");
btnlogin.addEventListener("click", (e) => {
    let iufunctions = new UIFunctions();
    iufunctions.login();
    iufunctions.resetForm();
});



   


