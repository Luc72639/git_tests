function cadastrarProduto() {
    var nome = document.getElementById("nomeProduto").value;
    var preco = parseFloat(document.getElementById("preco").value);
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var observacoes = document.getElementById("observacoes").value;

    alert("Produto cadastrado:\n" +
          "Nome: " + nome + "\n" +
          "Preço: " + preco + "\n" +
          "Quantidade: " + quantidade + "\n" +
          "Observações: " + observacoes);
          var ativo = document.getElementById("ativo").checked;
          var desativado = document.getElementById("desativado").checked;
          if (ativo) {
              alert("O produto está ativo.");
          }
          if (desativado) {
              alert("O produto está desativado.");
          }
          var multiplicacao = preco * quantidade;
          alert("O total: " + multiplicacao + ".");
}
function limparFormulario() {
    document.getElementById("nomeProduto").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("observacoes").value = "";
}