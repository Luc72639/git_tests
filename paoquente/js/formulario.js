var formulario = document.getElementById("formulario") || document.querySelector("form");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var mensagem = document.getElementById("mensagem");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        if (nome.value === "" || email.value === "" || mensagem.value === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        alert("Formulário enviado com sucesso!");
    });
}