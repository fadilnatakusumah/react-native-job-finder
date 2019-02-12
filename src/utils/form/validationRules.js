const validationForm = (value, rules, form) => {
    let valid = true;
    for (const rule in rules) {
        switch (rule) {
            case 'isRequired':
                valid = valid && validateRequired(value);
                break;
            case 'isEmail':
                valid = valid && validateEmail(value);
                break;
            case 'minLength':
                valid = valid && validateMinLength(value, rules[rule])
                break;
            case 'equalTo':
                valid = valid && validateConfirmPass(value, form[rules.equalTo].value)
                break;
            default:
                valid = true;
        }
    }
    return valid;
}


const validateRequired = (val) => {
    console.log('validateRequired')
    if (val.trim() !== '') {
        return true;
    }
    return false;
}

const validateEmail = (val) => {
    console.log('validateEmail')
    const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regExEmail.test(String(val).toLowerCase());
}

const validateMinLength = (value, rule) => {
    console.log('validateMinLength')
    if (value.length >= rule) {
        return true;
    }
    return false;
}

const validateConfirmPass = (value, confirmValue) => {
    console.log('validateConfirmPass')
    console.log(value, confirmValue);

    return value === confirmValue;
}

export default validationForm;