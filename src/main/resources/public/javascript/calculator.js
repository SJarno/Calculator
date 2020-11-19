function getNumber(value) {
    return parseInt(document.getElementById(value).value)
}

function setResult(result) {
    document.getElementById("result").innerHTML = result
}

function functionToString(functionToString) {
    document.getElementById("functionToString").innerHTML = functionToString
}

function plus() {
    setResult(getNumber("a") + getNumber("b"))
    functionToString(getNumber("a") + " + " + getNumber("b"))
}

function multiply() {
    setResult(getNumber("a") * getNumber("b"))
    functionToString(getNumber("a") + " * " + getNumber("b"))
}

function minus() {
    setResult(getNumber("a") - getNumber("b"));
    functionToString(getNumber("a") + " - " + getNumber("b"))
}
 
function divide() {
    setResult(getNumber("a") / getNumber("b"));
    functionToString(getNumber("a") + " / " + getNumber("b"))
}

function exponent() {
    setResult(Math.pow(getNumber("a"), getNumber("b")));
    functionToString(getNumber("a") + "^" + getNumber("b"))
}

function sin() {
    setResult(Math.sin(getNumber("c")));
    functionToString("sin(" + getNumber("c") + ")")
}

function cos() {
    setResult(Math.cos(getNumber("c")));
    functionToString("cos(" + getNumber("c") + ")")
}

function tan() {
    setResult(Math.tan(getNumber("c")));
    functionToString("tan(" + getNumber("c") + ")")
}

