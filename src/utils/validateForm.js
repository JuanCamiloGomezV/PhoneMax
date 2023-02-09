export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validateConfirmEmail(email, confirmEmail) {
    if (email === confirmEmail) {
        return true
    } else {
        return false
    }

}
export function isNumber(string) {
    if (/^\d+$/.test(string) || string == '')
        return true;
    else {
        return false;
    }
}

export function validateIsNotEmpty(name, phone) {
    if (name.length > 3 && phone.length > 5) {
        return true;
    } else {
        return false;
    }
}