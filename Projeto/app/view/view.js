class View{
    constructor(elemento){
        this._elemento = elemento;
    }

    _template(){
        throw new Error("O metodo template deve ser implementado");
    }

    update(modelo){
        this._elemento.innerHTML = this._template(modelo);
    }
}