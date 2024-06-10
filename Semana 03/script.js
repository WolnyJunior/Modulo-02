const botao = document.querySelector('button')
const inputResultado = document.getElementById('resultado')
const mensagemEncerramento = `
<span>
    <h3 style="color:red; text-align:center">Programa Encerrado.</h3>
    <p>O programa foi encerrado pela falta de <strong>confirmação.</strong></p>
</span>
`

function interacao() {
    let inputNome;
    while (true) {
        inputNome = prompt('Digite seu nome: ')
        if (inputNome === null) {
            // alert('programa encerrado')
            inputResultado.innerHTML = mensagemEncerramento
            return
        } else if (inputNome === '') {
            alert('Digite algo.')
        } else {
            const confirmar = confirm('Deseja confirmar as informações?')
            if (confirmar) {
                console.log(inputNome)
            } else {
                inputResultado.innerHTML = mensagemEncerramento
                return
            }
            break
        }
    }
    let inputIdade;
    while (true) {
        inputIdade = Number(prompt('Digite sua idade: '))
        if (inputIdade === null) {
            // alert('programa encerrado')
            inputResultado.innerHTML = mensagemEncerramento
            return
        } else if (isNaN(inputIdade) || inputIdade === '') {
            alert('Digite uma idade válida.')
        } else if (inputIdade < 16) {
            alert('Você não tem idade para continuar o formulário.')
        } else if (inputIdade > 100) {
            alert('Você provavelmente já está morto.')
        } else {
            const confirmar = confirm('Deseja confirmar as informações?')
            if (confirmar) {
                console.log(inputIdade)
            } else {
                inputResultado.innerHTML = mensagemEncerramento
                return
            }

            inputResultado.innerText = `Nome: ${inputNome} \nIdade: ${inputIdade}`
            break
        }
    }
}
botao.addEventListener('click', interacao)

