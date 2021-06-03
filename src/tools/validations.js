
/** VALIDATIONS **/


export const validateEmptyString = (word) => {
    return {
        error: (word)? false : true,
        message: (word)? '' : 'Debes rellenar este campo.',
        type: 'string'
    }
}


export const validateCheckbox = (word, type) => {
    return {
        error: (word)? false : true,
        message: (word)? '' : type,
        type: 'checkbox'
    }
}


export const validateEmail = (email) => {
    let err = validateEmptyString(email);
    if (!err.error) {
        const regex = RegExp(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            );
        const matches = regex.exec(email);
        return {
            error: (!matches)? true: false, 
            message: (!matches)? 'Este email es incorrecto.': '',
            type: 'email'
        };
    } else {
        return err;
    }
}


export const validatePassword = (password) => {
    let err = validateEmptyString(password);
    if (!err.error) {
        // Password format: minimum eight and maximum fifteen characters, at least one uppercase letter, one lowercase letter, one number and one special character
        const regex = RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
        );
        const matches = regex.exec(password);
        return {
            error: (!matches)? true: false, 
            message: (!matches)? 'Esta contraseña es incorrecta. Una contraseña válida se compone de 8 a 15 caracteres, con al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.': '',
            type: 'password'
        };
    } else {
        return err;
    }
}


export const validateMatchedPasswords = (password, repeatedPwd) => {
    return {
        error: password !== repeatedPwd, 
        message: (password !== repeatedPwd)? 'Estas contraseñas no coinciden.' : '',
        type: 'repeated-pwd'
    }
}

