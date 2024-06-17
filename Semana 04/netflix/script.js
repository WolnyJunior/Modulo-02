const itensNav = document.querySelector('.itens-nav')

itensNav.addEventListener('click', () => {
    alert('Página em Contrução.')
})


const botoesEpisodeos = document.querySelectorAll('.botoes-episodios').forEach(btnItem => {
    btnItem.addEventListener('mouseover', () => {
        btnItem.classList.add('botoes-episodios-selecionado')
    })
    btnItem.addEventListener('mouseout', () => {
        btnItem.classList.remove('botoes-episodios-selecionado')
    })
});

function hideAllIframes() {
    const iframes = document.querySelectorAll('.iframe-show')
    iframes.forEach(iframe => {
        iframe.style.display = 'none'
    })
}

const botaoTrailer = document.getElementById('btn-trailer')
const iframeTrailer = document.getElementById('iframe-trailer')

const btnEp9 = document.getElementById('btn-ep9')
const iframeEp9 = document.getElementById('iframe-ep9')

const btnEp64 = document.getElementById('btn-ep64')
const iframeEp64 = document.getElementById('iframe-ep64')

const btnEp79 = document.getElementById('btn-ep79')
const iframeEp79 = document.getElementById('iframe-ep79')

const descricao = document.getElementById('descricao')

botaoTrailer.addEventListener('click', () => {
    hideAllIframes()
    iframeTrailer.style.display = 'block'
    descricao.innerHTML =
        `
    <h1>Naruto</h1>
    <span>
        "Naruto" segue a jornada de Naruto Uzumaki, um jovem ninja que busca reconhecimento e sonha
        em se tornar o Hokage (líder de sua vila). Ele enfrenta desafios, faz amigos e descobre
        segredos sobre seu passado enquanto treina para se tornar um ninja poderoso."
    </span>
`
})


btnEp9.addEventListener('click', () => {
    hideAllIframes()
    iframeEp9.style.display = 'block'
    descricao.innerHTML =
        `
    <h1>Episódio 9</h1>
    <h3>Kakashi: O ninja copiador</h3>
    <span>
        Naruto e seus companheiros de equipe, Sakura e Sasuke, continuam seu treinamento sob a supervisão do sensei Kakashi. Eles enfrentam desafios enquanto Kakashi revela suas habilidades como um ninja copiador, capaz de imitar técnicas poderosas
    </span>
    `
})

btnEp64.addEventListener('click', () => {
    hideAllIframes()
    iframeEp64.style.display = 'block'
    descricao.innerHTML =
        `
<h1>Episódio 64</h1>
<h3>Zero Motivação: O poder escondido</h3>
<span>
    Naruto luta para melhorar suas habilidades e é desafiado por sua falta de motivação. Enquanto isso, seus amigos enfrentam dificuldades próprias. Naruto descobre um poder interior oculto e começa a entender a importância de sua jornada como ninja.
</span>
`
})

btnEp79.addEventListener('click', () => {
    hideAllIframes()
    iframeEp79.style.display = 'block'
    descricao.innerHTML =
        `
<h1>Episódio 79</h1>
<h3>O Jutsu Proibido: O selo desfeito</h3>
<span>
    Uma série de eventos leva Naruto a explorar um jutsu proibido que desencadeia consequências inesperadas. Ele e sua equipe enfrentam o perigo enquanto tentam conter o poder do jutsu desfeito e proteger sua vila.
</span>
`
})

