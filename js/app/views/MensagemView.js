class MensagemView extends View {

    constructor(elemento) {
        // É necessario colocar esse atributo super para que a classe pai receba 
        // os elementos das calsse filha
        super(elemento);
    }

    template(model) {

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`
    }
}