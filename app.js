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
 * - DE ACUERDO A LA VALIDACIÓN DE LOS DATOS SE MOSTRARÁ UN MENSAJE 
 * - EL BTNSENDUSER INSTANCIA LA CLASE UIFUNCTIONS PARA USAR EL MÉTODO ADDUSER() 
 * - EL BTNLOGIN INSTANCIA LA CLASE UIFUNCTIONS PARA USAR EL MÉTODO LOGIN() Y RESETFORM() 
 * 
 */

class Controls{
    constructor(name, email, password, validapass){
        this.name = name = document.getElementById("inputnombre");
        this.email = email = document.getElementById("inputcorreo");
        this.password = password = document.getElementById("inputcontraseña")
        this.validapass = validapass = document.getElementById("inputvalidarcontraseña");
    } 
}

        class UIFunctions {
            addUser() {
                let iufunctions = new UIFunctions();      
                 let addInputs = new Controls()
                 let emptyvalidapassword = new Controls()
                 let addName = addInputs.name.value
                 let addEmail = addInputs.email.value
                 let addPassword = addInputs.password.value
                 let validaPassword = addInputs.validapass.value
                 let empty = emptyvalidapassword.validapass
                if (addPassword !== validaPassword) {
                    console.log("La contraseña no coincide");
                    empty.value=""
                } else {
                    userArray.push({
                        name: addName,
                        email: addEmail,
                        password: addPassword,
                    });
                    iufunctions.resetForm()
                    console.log(userArray);
                }
            }

            login() {
                let logInputs = new Controls()
                let nam = logInputs.name.value;
                let pas = logInputs.password.value
                userArray.forEach((element) => {
                    if ((element.name === nam && element.password === pas)) {
                        console.log("usuario autenticado");
                     }else{
                        console.log("Usuario o contraseña incorrecto");
                     }                   
                });
            }

            resetForm(){
                 const emptyInputs = new Controls();
                 emptyInputs.name.value=""
                 emptyInputs.email.value=""
                 emptyInputs.password.value=""
                 emptyInputs.validapass.value="" 
            }
        }
        let userArray = [];
        let btnsendUser = document.getElementById("enviarinfo");
        btnsendUser.addEventListener("click", (e) => {
            e.preventDefault();
            let iufunctions = new UIFunctions();
            iufunctions.addUser();
           
        });

        let btnlogin = document.getElementById("validarinfo");
        btnlogin.addEventListener("click", (e) => {
            let iufunctions = new UIFunctions();
            iufunctions.login();
            iufunctions.resetForm()
        });

   


