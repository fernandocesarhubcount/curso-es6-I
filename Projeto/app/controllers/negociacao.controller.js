class NegociacaoController{

  constructor(){
    let $ = document.querySelector.bind(document);

    this._inputData        = $("#data");
    this._inputQuantidade  = $("#quantidade");
    this._inputValor       = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView  = new NegociacoesView($("#negociacoesView"));
  }

  adiciona(event){
    event.preventDefault();

    let negociacao = this._criaNegociacao();

    this._listaNegociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._listaNegociacoes);
    this._finalizaAdicionar();
  }

  _criaNegociacao(){
    return new Negociacao(
      DataInterface.txtToData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _finalizaAdicionar(){
    this._inputQuantidade.value   = "";
    this._inputValor.value        = "0";
    this._inputData.value         = "";
    this._listaNegociacoes.length = 0;
    this._inputData.focus();
  }

}
