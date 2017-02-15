let negociacao           = new Negociacao();
let negociacaoController = new NegociacaoController();

document.querySelector("#btnApaga").addEventListener('click',function(event){
    negociacaoController.apaga();
});