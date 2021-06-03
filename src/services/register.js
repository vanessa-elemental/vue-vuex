
/** Register **/

export const validateUser = (/*user*/) => {
    // TODO: VALIDATE USER
    
    // TODO: USER ALREADY EXISTS
    const err = false;
    const result = {
        error: (err) ? true : false, 
        message: (err) ? 'Ya estás registrado con este email.<br/><div class="text-gray-500">Inicia sesión para entrar en tu cuenta.</div>' : '',
        type: 'user'
    }
    return result;
}