import Controls from "./Control Class.js"

let userArray = [];
export default class UIFunctions {
    addUser() {      
        let iufunctions = new UIFunctions();
        let addInputs = new Controls();
        let emptyvalidapassword = new Controls();
        let addName = addInputs.name.value;
        let addEmail = addInputs.email.value;
        let addPassword = addInputs.password.value;
        let validaPassword = addInputs.validapass.value;
        let empty = emptyvalidapassword.validapass;
        if (addPassword !== validaPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Las contrañas no coinciden",
                showConfirmButton: false,
                timer: 1500,
            });
            console.log("La contraseña no coincide");
            empty.value = "";
        } else {
            Swal.fire({
                icon: "success",
                text: "Nuevo usuario registrado",
                showConfirmButton: false,
                timer: 1500,
            });
            userArray.push({
                name: addName,
                email: addEmail,
                password: addPassword,
            });
            iufunctions.resetForm();
            console.log(userArray);
        }
    }
    
    login() {
        let logInputs = new Controls();
        let nam = logInputs.name.value;
        let pas = logInputs.password.value;
        userArray.forEach((element) => {
            if (element.name === nam && element.password === pas) {
                Swal.fire({
                    icon: "success",
                    text: "Usuario autenticado",
                    showConfirmButton: false,
                    timer: 1500,
                });
                console.log("usuario autenticado");
            } else if (element.name != nam && element.password != pas ) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Usuario o contraseña incorrecto",
                    showConfirmButton: false,
                    timer: 1500,
                });
                console.log("Usuario o contraseña incorrecto");
            }
        });
    }

    resetForm() {
        const emptyInputs = new Controls();
        emptyInputs.name.value = "";
        emptyInputs.email.value = "";
        emptyInputs.password.value = "";
        emptyInputs.validapass.value = "";
    }

    validaInput(name, email, pass, validpass){
        const emptyInputs = new Controls();
        if (
            emptyInputs.name.value == "" ||
            emptyInputs.email.value == "" ||
            emptyInputs.password.value == "" ||
            emptyInputs.validapass.value == ""
        ) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debe llenar todos los campos",
                showConfirmButton: false,
                timer: 1500,
            });
    }
}

}