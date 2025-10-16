function recebenumeros(){

        var nomeFornecedor = document.getElementById('nomeFornecedor').value;
        var estado = document.getElementById('Estado').value;
        var cidade = document.getElementById('cidade').value;
        var preco = parseFloat(document.getElementById('preco').value);
        var apple = document.getElementById('apple');
        var linux = document.getElementById('linux');
 
         var resultado = "";
 
         if(apple.checked){
            resultado = apple.value;
         }else if(linux.checked){
            resultado = linux.value;
         }
 
 
 
 
 
        alert(nome + estado + cidade + compra + resultado);
}