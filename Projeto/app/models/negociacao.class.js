class Negociacao{
  constructor(data, quantidade, valor){
    this._data       = new Date(data);
    this._quantidade = quantidade;
    this._valor      = valor;

    Object.freeze(this);
  }

  // Pre-sets de Data
  get data(){
    return this._data;
  }

  // Pre-sets de Quantidade
  get quantidade(){
    return this._quantidade;
  }

  // Pre-sets de Valor
  get valor(){
    return this._valor;
  }

  obtemVolume(){
    return this._quantidade * this._valor
  }
}
