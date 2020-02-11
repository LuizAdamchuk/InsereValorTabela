class NegociacaoController {

    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        /* Colocando essa funcao dntro do ListaNeg faz com que se atualiza automaticamente
        quando se adiciona ou apaga algo, a questao foi se usar uma function(){}
        ela tem o this dinamico assumindo as caracteristicas do lugar onde esta
        e como ela acaba indo para a listanegociacios acaba nao dando certo, porem,
        usando a arrowfunction que tem o this com escopo lexico, ou seja, ele mantem
        a caracterisca eternamente do local onde ele foi chamado. nesse caso ficando o this
        do NegociacaoContr. */
        this._listaNegociacoes = new ListaNegociacoes((model) => {
            this._negociacoesView.update(model);
        });

        this._negociacoesView = new NegociacoesView(document.querySelector("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(document.querySelector("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }


    adiciona(event) {

        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = "Negociação adicionada com sucesso."
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();

    }

    apaga() {

        this._listaNegociacoes.esvazia();


        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao() {

        return new Negociacao(
            // Como usamos na frente dos métodos static podemo acessalos de maneira mais
            // facil fazendo diretamente da classe sem precisar instanciar
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}