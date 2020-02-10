class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        // É colocado esse erro para o caso de se esquecer de implementar esse método
        // nas classes filhas, caso seja implemetado um novo método template na classe
        // filha ele vai sobrescrever este
        throw new Error("O método template deve ser implementado.");
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

}