class ArquivoController {

    constructor() {
        this._inputArquivo = document.querySelector('.dados-arquivo');
        this._arquivo      = [];
    }

    envia() {
        this._cria();

        console.log(`Nome: ${this._arquivo.nome}\nTamanho: ${this._arquivo.tamanho}\nTipo: ${this._arquivo.tipo}`);

        this._limpaFormulario();
    }

    _cria(){
        let formatoTeste = /^[A-Z]+\/\d+\/\w+$/.test(this._inputArquivo.value);

        if(this._inputArquivo.value.length > 0){

            if(!formatoTeste) throw new Error("Formato invalido");
            else this._arquivo = new Arquivo(...this._inputArquivo.value.split('/'));
        }
        else throw new Error("Formato invalido");

    }

    _criaArquivo(){
        return 
    }

    _limpaFormulario() {
        this._inputArquivo.value = '';
        this._inputArquivo.focus();
    }
}