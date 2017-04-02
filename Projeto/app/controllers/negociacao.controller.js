class NegociacaoController{

  constructor(){
    let $ = document.querySelector.bind(document);

    this._inputData        = $("#data");
    this._inputQuantidade  = $("#quantidade");
    this._inputValor       = $("#valor");

    this._negociacoesView  = new NegociacoesView($("#negociacoesView"));

    //this._listaNegociacoes = new ListaNegociacoes(modelo=> this._negociacoesView.update(modelo));
    this._listaNegociacoes = ProxyFactor.create(
        new ListaNegociacoes(),
        ['adiciona','esvazia'],
        modelo=>this._negociacoesView.update(modelo)
      );

    this._mensagem         = ProxyFactor.create(
      new Mensagem(),
      ["texto"],
      modelo=>this._mensagemView.update(modelo)
    );

    this._mensagemView     = new MensagemView($('#mensagemView'));
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event){
    event.preventDefault();

    let negociacao = this._criaNegociacao();

    this._listaNegociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem.texto = 'Negociacao adicionado com sucesso';

    this._finalizaAdicionar();
  }

  apaga(){
    this._listaNegociacoes.apaga(); 
    this._negociacoesView.update(this._listaNegociacoes);
    this._mensagem.texto = "Lista pagada com sucesso!"
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
