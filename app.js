
class Controls{
    constructor(name, email, password, validapass){
        this.name = name = document.getElementById("inputnombre");
        this.email = email = document.getElementById("inputcorreo");
        this.password = password = document.getElementById("inputcontraseña")
        this.validapass = validapass = document.getElementById("inputvalidarcontraseña");
    }
   
}

        class UI {
            addUser() {
                 let addInputs = new Controls()
                 let addName = addInputs.name.value
                 let addEmail = addInputs.email.value
                 let addPassword = addInputs.password.value
                 let validaPassword = addInputs.validapass.value
                if (addPassword !== validaPassword) {
                    console.log("La contraseña no coincide");
                } else {
                    userArray.push({
                        name: addName,
                        email: addEmail,
                        password: addPassword,
                    });
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

        let btnsendUser = document.getElementById("enviarinfo");
        let userArray = [];
        btnsendUser.addEventListener("click", (e) => {
            e.preventDefault();
            let iu = new UI();
            iu.addUser();
            iu.resetForm()
           
;        });

        let btnlogin = document.getElementById("validarinfo");
        btnlogin.addEventListener("click", (e) => {
            let iu2 = new UI();
            iu2.login();
        });

   


