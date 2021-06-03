
/** Register **/


export const userAlreadyExists = (/*user*/) => {
    // TODO: VALIDATE USER
    
    // TODO: USER ALREADY EXISTS -> GET USER
    const err = false;
    const result = {
        error: (err) ? true : false, 
        message: (err) ? 'Ya estás registrado con este email.<br/><div class="text-gray-500">Inicia sesión para entrar en tu cuenta.</div>' : '',
        type: 'user'
    }
    return result;
}


export const validateUser = (/*user*/) => {
    // TODO: VALIDATE USER
    
    // TODO: USER WITH THIS DATA EXISTS -> GET USER
    const err = true;
    const result = {
        error: (err) ? true : false, 
        message: (err) ? 'Email y/o contraseña equivocados.' : '',
        type: 'user'
    }
    return result;
}

