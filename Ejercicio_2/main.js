let email = document.getElementById("email");
let pswd = document.getElementById("pswd");
let btnEnviar = document.getElementById("btnEnviar");
let msg = document.getElementById("msg");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    let enviar = true;

    e.preventDefault();
    // Declaro regex
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // Verificar email
    if(email.value == "") {
        showError("No se ha ingresado un email") 
    } else {
        if(!regexEmail.test(email.value)) {
            enviar = false;
            showError("Email inválido");
        } else {
            enviar = true;
        }
    }
    
    if(pswd.value == "") {
        showError("No se ha ingresado una contraseña");
    } else {
        if(!regexPass.test(pswd.value)) {
            enviar = false;
            showError("La contraseña debe contener una mayúscula, una minúscula y un número");
        } else {
            enviar = true;
        }
    }
    
    enviar ? msg.textContent = "Enviado" : null;
})

function showError(error) {
    const msgError = document.createElement("span");

    msgError.textContent = error;

    msg.appendChild(msgError);

    setTimeout(() => {
        msgError.remove();
    }, 2000);
}