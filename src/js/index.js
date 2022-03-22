/*
* Quando clicar no usuário de Stand, mostrar o Stand que corresponde ao memso e esconder o que estava selecionado anteriormente

* Para isso preciso trabalhar com dois elementos
1 - Listagem
2 - Cartão Stand

* Criar duas váriaveis no JS para trabalhar com os elementos da tela

* Trabalhar com o evento de click feito pelo usuário na listagem de Stands.
1 - Remover a classe aberto somente do cartão que está aberto.
2 - Ao clicar em um Usuário de Stand da Listagem, pegamos o id do Stand para saber qual o card mostrar
3 - Remover a classe ativa que marca o Stand do usuário selecionado
4 - Adicionar a classe ativo no item da lista selecionado
**/ 

// Criar duas váriaveis no JS para trabalhar com os elementos da tela

const listaSelecaoStands = document.querySelectorAll('.stand');
const standCard = document.querySelectorAll('.cartao-stand');

listaSelecaoStands.forEach(stand => {
    // Trabalhar com o evento de click feito pelo usuário na listagem de Stands.
    stand.addEventListener('click', () => {
        // Remover a classe aberto somente do cartão que está aberto.
        const cartaoStandAberto = document.querySelector('.aberto');
        cartaoStandAberto.classList.remove('aberto');

        // Ao clicar em um Usuário de Stand da Listagem, pegamos o id do Stand para saber qual o card mostrar
        const idStandSelecionado = stand.attributes.id.value;

        const idDoCartaoStandParaAbrir = 'cartao-' + idStandSelecionado
        const cartaoStandParaAbrir = document.getElementById(idDoCartaoStandParaAbrir);
        cartaoStandParaAbrir.classList.add('aberto');

        // Remover a classe ativa que marca o Stand do usuário selecionado
        const standAtivoNaListagem = document.querySelector('.ativo');
        standAtivoNaListagem.classList.remove('ativo');

        // Adicionar a classe ativo no item da lista selecionado
        const standSelecionadoNaListagem = document.getElementById (idStandSelecionado)
        standSelecionadoNaListagem.classList.add('ativo')
 
    });
});



