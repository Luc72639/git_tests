function imprimirVariavies(){
    var filme = document.getElementById("filme").value;
    var genero = document.getElementById("genero").value;
    var assistindo = document.querySelector('input[name="assistindo"]:checked').value;
    alert(filme + "" + genero + "" + assistindo);
    }
function imprimirVariavies2(){
    var nome = document.getElementById("nome").value;
    var turma = document.getElementById("Turma").value;
    var turno = document.querySelector('input[name="turno"]:checked').value;
    alert(nome + "" + turma + "" + turno);
}
function imprimirVariavies3(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var genero = document.querySelector('input[name="genero"]:checked').value;
    alert(nome + "" + idade + "" + genero);
}
