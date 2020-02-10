class DateHelper {

    constructor() {
        throw new Error("DateHelper não pode ser instanciada")
    }

    // por colocar static na frente do método esse pode ser acessado mais facilmente
    // olha no NegociacaoCont..
    static textoParaData(texto) {
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
    static dataParaTexto(data) {

        if (/\d{4}-\d{2}-\d{2}/.test(data)) {
            throw new Error("Deve estar no formato aaaa-mm-dd")
        }
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} `
    }

}