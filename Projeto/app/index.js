// INICIALIZA ////////////////////////////////////////////////////////////////
let negociacaoController = new NegociacaoController();

// ARMADILHAS VISUAIS INDEPENDENTES //////////////////////////////////////////
document.querySelector("#btnApaga").addEventListener('click',function(event){
    negociacaoController.apaga();
});
