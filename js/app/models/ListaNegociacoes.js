class ListaNegociacoes {

    constructor(armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;

    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha(this);

    }

    get negociacoes() {
        // fazendo dessa maneira eu envio uma copia da lista e nao a lista em si
        // isso é fazer uso da programacao defensiva para proteger a classe
        // ja que se nao fizer assim um simples push pode adicionar 
        // ou até mesmo um .lenght =0 pode apagar toda nossa lista
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        this._armadilha(this);

    }
}