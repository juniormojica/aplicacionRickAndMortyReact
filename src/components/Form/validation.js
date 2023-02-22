
const regexEmail =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

const validate =(userData)=>{
    const errors={}
    if(userData.email.length>35) errors.mail = "Debe tener menos de 35 caracteres"
    if(!userData.email) errors.mail = "Ingresa el Correo"
    if(!regexEmail.test(userData.email)) errors.email = "Correo Invalido"

    if(!passRegex.test(userData.password) ) errors.password = "Contraseña Debil,Cambiala"
   


    return errors;
}


export default validate;