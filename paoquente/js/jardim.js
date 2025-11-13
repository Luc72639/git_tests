var imagens = [
    "imagens/LocalJardim.jpg",
    "imagens/DentroJardim.jpg",
    "imagens/Buffet1.jpg",
    "imagens/Buffet2.jpg",
    "imagens/Lanche1.jpg",
    "imagens/Lanche2.jpg",
    "imagens/Café1.jpg",
];
var indice = 0;

var banner = document.getElementById("banner");

//
if (banner) {
    banner.style.transition = "opacity 400ms ease";
    banner.style.opacity = 1;
}

function mostrarImagem(){
   if (!banner) return;
   banner.style.opacity = 0;
   setTimeout(function(){
       banner.src = imagens[indice];
       banner.style.opacity = 1;
   }, 220); 
}

function ir(){
    indice++;
    if(indice >= imagens.length){
        indice = 0;
    }
    mostrarImagem();
}
function voltar(){
    indice--;
    if(indice < 0){
        indice = imagens.length - 1;
    }
    mostrarImagem();
}
mostrarImagem();