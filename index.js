// Calculator

function handleClick(event) {
    document.getElementById("view").innerHTML += (event.target.innerHTML)
}

function clearView() {
    document.getElementById("view").innerHTML = ""
}

function calculate() {
    document.getElementById("view").innerHTML = eval(document.getElementById("view").innerHTML)
}

function sins() {
    document.getElementById("view").innerHTML = Math.sin(document.getElementById("view").innerHTML)
}

function tans() {
    document.getElementById("view").innerHTML = Math.tan(document.getElementById("view").innerHTML)
}

function coss() {
    document.getElementById("view").innerHTML = Math.cos(document.getElementById("view").innerHTML)
}

function log() {
    document.getElementById("view").innerHTML = Math.log(document.getElementById("view").innerHTML)
}

function pi() {
    document.getElementById("view").innerHTML += Math.PI.toFixed(6)
}

function cubert() {
    document.getElementById("view").innerHTML = Math.cbrt(document.getElementById("view").innerHTML)
}

function sqrt() {
    document.getElementById("view").innerHTML = Math.sqrt(document.getElementById("view").innerHTML)
}