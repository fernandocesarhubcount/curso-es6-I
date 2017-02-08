class NegociacaoController{

  constructor(){
    let $ = document.querySelector.bind(document);

    //this._inputData       = $("#data");
    this._inputData       = document.querySelector("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor      = $("#valor");

    console.log(this._inputData.value);
  }

  adiciona(event){
    event.preventDefault();

    let data = new Date(...
      this._inputData.value
        .split("-")
        .map((item, i)=>item - i%2)
      );

    this.finalizaAdicionar();
  }

  finalizaAdicionar(){
    this._inputQuantidade.value = ""
    this._inputValor.value      = "0"
    this._inputData.value       = ""
    this._inputData.focus();
  }

}
