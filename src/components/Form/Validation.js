const Validation = (userData) => {
    let errors= {};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = 'El email es invalido';
    }
    if(!userData.username){
        errors.username = 'Este campo no puede estar vacio'
    }
    if (userData.username.length >35){
        errors.name = 'El email no puede superar los 35 caracteres'
    }
    if(!userData.password){
        errors.name = 'La contraseña debe contener al menos un numero'
    }
    if(userData.password.length < 6 && userData.password.length > 10){
        errors.password = 'la contraseña debe contener entre 6 y 10 caracteres'
    }
    return errors
};

export default Validation;