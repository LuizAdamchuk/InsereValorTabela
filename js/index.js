var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var tbody = document.querySelector('table tbody')

document.querySelector('form').addEventListener('submit', function(event){


    // como por padrao o formulario reinicia a pagina entao os dados sao perdidos,
    // para evitar esse comportamento se coloca esse comando para prevenir o comportamento padrao
    
    event.preventDefault();
    // Estou criando uma variavel que irá colocar no html o marcador tr
    var tr = document.createElement('tr');

    // Esse forEach irá percorrer passando por todas as variaveis do campos, e recebendo cada
    // variavel no campo entao criando o elemento td no html, fazendo o texto do td receber
    // o valor que esta no campo, por fim adiciionando o recem criado td ao tr
    campos.forEach(function(campo){

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    // essa parte irá fazer a limpeza dos campos colocando nada no primeiro, 1 no segundo e 0 no terceiro
    // e por fim colocando o cursos usando o focus no primeiro elemento
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});