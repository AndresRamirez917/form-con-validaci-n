import Controls from "./Control Class.js";

export let userArray = [];
const emailVálido = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
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
        text: "Las contraseñas no coinciden",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("La contraseña no coincide");
      empty.value = "";
    } else if (!emailVálido(addInputs.email.value)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El formato del correo no es válido",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    } else {
      Swal.fire({
        icon: "success",
        text: "Nuevo usuario registrado",
        showConfirmButton: false,
        timer: 1500,
      });
      if (this.validaUserName(addName,addEmail)) {
      } else {
       
        userArray.push({
          name: addName,
          email: addEmail,
          password: addPassword,
        });
      }
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
      } else if (element.name != nam || element.password != pas) {
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

  validaInput(nombre, correo, pass, validpass) {
    const emptyInputs = new Controls();
    const emptyInputs2 = new Controls();
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

  validaUserName(name, email) {
    let validaInput = new Controls();
    name = validaInput.name.value;
    email = validaInput.email.value;
    userArray.forEach((user) => {      
      if (user.name === name || user.email === email){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El nombre o el email ya están siendo usados",
          showConfirmButton: false,
          timer: 1500,
        });
        // NO PUDE EVITAR QUE SE AGREGARA EL NUEVO REGISTRO AL ARRAY
        // PARA SOLVENTAR EL ERROR, ELIMINO EL ÚLTIMO REGISTRO QUE SE
        // AGREGO Y EVITO DUPLICIDAD DE REGISTROS, PERO NO FUNCIONA COMO ESPERABA
         //userArray.pop()
      }
        userArray.pop()
    });
  
  }
  
}


