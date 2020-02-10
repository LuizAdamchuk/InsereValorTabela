// Para criarmos uma classe, usamos a palavra reservada class seguida do nome da classe. 
// Por convenção, nomes de classe começam em letra maiúscula.
class Negociacao {

//Para definirmos atributos de instância de uma classe, precisamos adicionar em sua definição um 
//constructor. É através do construtor que adicionamos na variável implícita this as propriedades 
//que desejamos que toda instância da classe tenha.
    constructor(data, quantidade, valor) {
        // Apos criada uma classo dessa maneira eu coloco quais sao os atributos que irao fazer
        // parte dela, é necessario colocar o this pois ele ira ser a variavel que sempre aponta
        // para o evento
        // Colocando o underline trata-se de uma propriedade privada que nao deve ser modificada
        // por se tratar de uma convenção isso ainda pode ser mudado, porem, se colocar o 
        // objet.freeze ela devolve as propriedades que nao pode ser modificadas
        // Adotamos a convenção _ para indicar que determinada propriedade é privada, isto é, 
        //só pode ser acessado por métodos da classe.
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        // ele é raso entao caso o valor que passamos para um propriedade seja um objeto ele nao
        // ira congelar os metodos daquele objeto, entao, é por isso que precisamos fazer diferente
        // com o data recebendo o valor porem criando novamente um objeto a partir daquele dado
        // isso tbm na questao do get data, criando assim gargalos para que nao ocorra a modificacao
        Object.freeze(this);
        // Podemos solicitar à Object.freeze o congelamento de um objeto com todas as suas 
        // propriedades. Qualquer alteração de suas propriedades serão ignoradas.
        //No exemplo anterior, podemos aplicar Object.freeze no construtor da classe, 
        //tendo como alvo this, mas claro, só depois de termos atribuído os valores recebidos 
        //no construtor às propriedades.

    };
    //  colocando dessa maneira os metodos, com o get na frente, quando for ser usado la fora
    // basta usar , ex.: x.volume, ira passar a funcionar como se fosse uma propriedade.
    get volume() {
        return this._quantidade * this._valor;
    };
    get data() {
        return new Date(this._data.getTime());
    };
    get quantidade() {
        return this._quantidade
    };
    get valor() {
        return this._valor
    };
}