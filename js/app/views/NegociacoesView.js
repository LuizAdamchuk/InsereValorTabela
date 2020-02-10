class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    _template(model) {
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
                ${model.negociacoes.map(n => {

                    return `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>${ // Nesse caso precisamos usar o modelo reduce que é um forEach 
                        //reduzido que ja recebe o falor da variavel inicial como 2
                        // parametro, no caso o total recebeu 0.0
                        // nesse caso tem a funcao de fazer a soma do total de volume
            //o primeiro parâmetro é o valor da última iteração, que neste caso é o total.
            //O segundo parâmetro é o valor da iteração atual, neste caso o novo número que
            //queremos multiplicar.
                        model.negociacoes.reduce((total, n) => {
                            return total += n.volume
                        }, 0.0)
                
                    }
                </td>
            </tfoot>
        </table>
        `;
    }

}