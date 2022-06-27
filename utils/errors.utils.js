module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: ''}

    if (err.message.includes('pseudo')) {
        errors.pseudo = "Pseudo incorrect ou déja pris";
    }

    if (err.message.includes('email')) {
        errors.email = "Email incorrect";
    }

    if (err.message.includes('password')) {
        errors.password = "Le mots de pass doit faire plus de 6 caractères au minimum";
    }
    
    if (err.code == 11000 && Object.keys(err.keyValue)[0].includes("pseudo")) {
        errors.pseudo = "Cet pseudo est déja enresistré";
    }

    if (err.code == 11000 && Object.keys(err.keyValue)[0].includes("email")) {
        errors.email = "Cet email est déja enresistré";
    }
    
    return errors;
}

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}

    if (err.message.includes('email')) {
        errors.email = "Email inconnu";
    }

    if (err.message.includes('password')) {
        errors.password = "Email ou mots de passe incorrect ";
    }

    return errors;
}