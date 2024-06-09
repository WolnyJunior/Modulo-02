document.addEventListener('DOMContentLoaded', function () {
    const listaProdutos = document.getElementById('listaProdutos')
    const botaoAdicionarProduto = document.getElementById('botaoAdicionar')

    // Função para adicionar um produto à lista
    function adicionarProduto(nome, preco) {
        const item = document.createElement('li')
        item.textContent = `Produto: ${nome} - Preço: R$: ${preco.toFixed(2)}`

        // Alternar cor de fundo do li
        const alternaCorDeFundo = listaProdutos.getElementsByTagName('li')
        const isEven = alternaCorDeFundo.length % 2 === 0
        item.style.backgroundColor = isEven ? '#eee' : '#fff'

        listaProdutos.appendChild(item)

        // Exibir um alerta ao adicionar o produto
        alert(`Produto adicionado com sucesso. \nProduto: ${nome} - Preço: R$: ${preco.toFixed(2)}`)
    }

    // Evento de clique no botão 'Adicionar'.
    botaoAdicionarProduto.addEventListener('click', function () {
        let continuaAdicionarProdutos = true

        while (continuaAdicionarProdutos) {

            let nomeProduto = prompt('Digite um produto:').toUpperCase()
            if (!nomeProduto) {
                alert('Adicione um produto.')
                return
            }

            const precoProduto = parseFloat(prompt('Digite o preço do produto:'))
            if (isNaN(precoProduto) || precoProduto <= 0) {
                alert('O preço do produto, deve ser um número válido maior que 0(zero)')
                return
            }

            adicionarProduto(nomeProduto, precoProduto)

            continuaAdicionarProdutos = confirm('Deseja adicionar outro produto?')
        }

        // Exibir um alerta ao encerrar o programa.
        alert('Programa Finalizado.')
    })
})
