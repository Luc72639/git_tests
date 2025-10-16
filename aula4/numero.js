function recebeNumeros() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var soma = n1 + n2;
    alert("A soma dos números é: " + soma + ".");
}
function subtraiNumeros() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var subtracao = n1 - n2;
    alert("A subtração dos números é: " + subtracao + ".");
}
function multiplicaNumeros() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var multiplicacao = n1 * n2;
    alert("A multiplicação dos números é: " + multiplicacao + ".");
}
function divideNumeros() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    if (n2 !== 0) {
        var divisao = n1 / n2;
        alert("A divisão dos números é: " + divisao + ".");
    } else {
        alert("Não é possível dividir por zero.");
    }
}