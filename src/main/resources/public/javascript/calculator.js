function getNumber(value) {
    return parseInt(document.getElementById(value).value)
}

function setResult(result) {
    document.getElementById("result").innerHTML = result
}

function plus() {
    setResult(getNumber("a") + getNumber("b"))
}

function kerto() {
    setResult(getNumber("a") * getNumber("b"))
}

function miinus() {
    setResult(getNumber("a") - getNumber("b"));
}
 
function jako() {
    setResult(getNumber("a") / getNumber("b"));
}

function sin() {
    setResult(Math.sin(getNumber("c")));
}

function cos() {
    setResult(Math.cos(getNumber("c")));
}

function tan() {
    setResult(Math.tan(getNumber("c")));
}

