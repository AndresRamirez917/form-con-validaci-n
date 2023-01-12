
// class  Users {
//     constructor(name, email, password){
//         this.name = name,
//         this.email = email,
//         this.password = password
//     }
// }
        let inputName = document.getElementById("inputnombre").value;
        let inputemail = document.getElementById("inputcorreo").value;
        let inputPassword = document.getElementById("inputcontraseña").value;
        let validatepass = document.getElementById(
            "inputvalidarcontraseña"
        ).value;
        let madre = document.getElementById("madre").value;

        class UI {
            addUser() {
                let inputName = document.getElementById("inputnombre").value;
                let inputemail = document.getElementById("inputcorreo").value;
                let inputPassword =
                    document.getElementById("inputcontraseña").value;
                let validatepass = document.getElementById(
                    "inputvalidarcontraseña"
                ).value;
                if (inputPassword !== validatepass) {
                    console.log("La contraseña no coincide");
                } else {
                    userArray.push({
                        name: inputName,
                        email: inputemail,
                        password: inputPassword,
                    });
                    console.log(userArray);
                }
            }

            login(input) {
                userArray.forEach((element) => {
                    if ((element.name === input.value)) {
                        console.log("usuario existe");
                    }
                    console.log(userArray);
                });
            }
        }

        let btnsendUser = document.getElementById("enviarinfo");
        let userArray = [];
        btnsendUser.addEventListener("click", (e) => {
            e.preventDefault();
            let iu = new UI();
            iu.addUser();
        });

        let btnlogin = document.getElementById("validarinfo");
        btnlogin.addEventListener("click", (e) => {
            let iu2 = new UI();
            iu2.login(madre);
        });

   


