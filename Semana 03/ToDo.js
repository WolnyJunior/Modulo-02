// Espera até o conteúdo do DOM seja carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    const inputNovaTarefa = document.getElementById('novaTarefa')
    const botaoAdicionarTarefa = document.getElementById('adicionarTarefa')
    const listaTarefas = document.getElementById('listaTarefas')

    // Adiciona um evento de clique no botão Adicionar
    botaoAdicionarTarefa.addEventListener('click', () => {
        // trim() remove os espaços em branco no início e no fim.
        const novaTarefa = inputNovaTarefa.value.trim()
        if (novaTarefa !== '') {
            adicionarTarefa(novaTarefa)

            inputNovaTarefa.value = ''
        }
    })

    // Adiciona evento de clique à lista, para gerenciar ações de excluir e completar tarefas
    listaTarefas.addEventListener('click', (eventoClick) => {
        // Verifica se o elemento clicado é o botão de excluir
        if (eventoClick.target.classList.contains('botaoDelete')) {
            // Remove um item da lista
            eventoClick.target.parentElement.remove()

        } else if (eventoClick.target.tagName === 'LI') {
            // Alterna a classe 'completed' no item da lista para marcar/desmarcar como concluído
            eventoClick.target.classList.toggle('completo')
        }
    })

    function adicionarTarefa(tarefa) {
        const li = document.createElement('li')
        li.textContent = tarefa
        // Cria botão de excluir tarefa
        const botaoDeletar = document.createElement('button')
        botaoDeletar.textContent = 'Deletar'
        // Adicona a classe ao botão de deletar
        botaoDeletar.className = 'botaoDelete'
        // Adiciona o botão deletar ao elemento 'li'
        li.appendChild(botaoDeletar)
        // Adiciona o elemento 'li' à lista de tarefas
        listaTarefas.appendChild(li)
    }
})


