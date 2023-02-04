const validation = (userData) => {
    const errors = {}

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
        errors.username = 'El email es inválido';
    }
    if (!userData.username) {
        errors.username = 'Por favor ingrese su email'
    }
    if (userData.username.length > 35) {
        errors.username = 'El email debe poseer menos de 35 carácteres'
    }

    if (!userData.password.match(/\d/)) {
        errors.password = 'La contraseña debe poseer al menos un carácter númerico'
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña debe poseer entre 6 y 10 carácteres'
    }

    return errors;
}

export default validation;