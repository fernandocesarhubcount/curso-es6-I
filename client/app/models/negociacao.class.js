class Negociacao{
  constructor(){
    this._data       = new Date();
    this._quantidade = 1;
    this._valor      = 0;
  }

  // Pre-sets de Data
  getData(){
    return this._data;
  }

  setData(data){
    this._data = data;
  }

  // Pre-sets de Quantidade
  getQuantidade(){
    return this._quantidade;
  }

  setQuantidade(quantidade){
    this._quantidade = quantidade;
  }

  // Pre-sets de Valor
  getValor(){
    return this._valor;
  }

  setValor(valor){
    this._valor = valor;
  }

  obtemVolume(){
    return this._quantidade * this._valor
  }
}
