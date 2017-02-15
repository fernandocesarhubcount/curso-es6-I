class NegociacaoController{

  constructor(){
    let $ = document.querySelector.bind(document);

    this._inputData        = $("#data");
    this._inputQuantidade  = $("#quantidade");
    this._inputValor       = $("#valor");

    this._listaNegociacoes = new ListaNegociacoes(modelo=> this._negociacoesView.update(modelo));
    this._negociacoesView  = new NegociacoesView($("#negociacoesView"));

    this._mensagem         = new Mensagem();
    this._mensagemView     = new MensagemView($('#mensagemView'));
    
  }

  adiciona(event){
    event.preventDefault();

    let negociacao = this._criaNegociacao();

    this._listaNegociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = 'Negociacao adicionado com sucesso';
    this._mensagemView.update(this._mensagem);

    this._finalizaAdicionar();
  }

  apaga(){
    this._listaNegociacoes.apaga(); 
    this._negociacoesView.update(this._listaNegociacoes);
    this._mensagem.texto = "Lista pagada com sucesso!"
    this._mensagemView.update(this._mensagem);
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
