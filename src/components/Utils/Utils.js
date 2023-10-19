function isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}


function isValidNumber(value){
        const re =/[2-9]{2}\d{9}/
    return re.test(value)
    
}

function validateNumber(value) {
    if (isValidNumber(value)) {
        return false
    }
    else {
        return true
    }
}

function validatePassword(value) {
    if (value.length < 8) {
        return false
    } 
    else if (value.length === 0) {
        return true
    }
    else {
        return true
    }
}

function validateInput(value, minLength, setError) {
    if (value.length < minLength) {
        setError("Invalid Input")
    } else {
        setError("")
    }
}

  function onValidUsername(value){
    const re = /^[a-z0-9_.]+$/
    return re.test(value)
}
function validateUser(value, setError) {
    if (onValidUsername(value)) {
        setError("")
    }
    else {
        setError("Invalid Username")
    }
}



const utils = {
    isValidEmail,
    validateNumber,
    validatePassword,
    validateInput,
    validateUser
};

export default utils;