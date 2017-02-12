class NegociacoesView{
    
    constructor(elemento){
        this._elemento = elemento;
    }

    update(modelo){
        this._elemento.innerHTML = this._template(modelo);
    }

    _template(modelo){
        
        return `
        
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${modelo.negociacoes.map((n)=>`
                        <tr>
                            <td>${DataInterface.dataToTxt(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${modelo.negociacoes.reduce((total,n)=> total += n.volume,0.0)}
                </td>
            </tfoot>
        </table>

    `;

    }
}