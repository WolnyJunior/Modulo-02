// document.body.addEventListener('click', ()=>{
//     alert('Página em construção.')
// })

const transicaoSuave = 'all .5s ease'

// Construção da seção de cards

const imagens = [
    {
        src: 'assets/series/breaking-bad.png',
        alt: 'Breaking Bad',
        description: 'Um professor de química transforma-se em um fabricante de metanfetamina ao descobrir um câncer.',
        episodes: ['Episódio 1', 'Episódio 2', 'Episódio 3'],
        trailer: 'https://www.youtube.com/embed/HhesaQXLuRY'
    },
    {
        src: 'assets/series/narcos.png',
        alt: 'Narcos',
        description: 'A história real dos cartéis de drogas da Colômbia.',
        episodes: ['Episódio 1', 'Episódio 2', 'Episódio 3'],
        trailer: 'https://www.youtube.com/embed/U7elNhHwgBU' /**Procurar link do trailer que esteja rodando */
    },
    {
        src: 'assets/series/la-casa-de-papel.jpg',
        alt: 'La Casa de Papel',
    },
    { src: 'assets/series/stranger-things-2.png', alt: 'Stranger Things' },
    { src: 'assets/filmes/arremessando-alto.jpeg', alt: 'Arremessando Alto' },
    { src: 'assets/series/dark.jpg', alt: 'Dark' },
    { src: 'assets/filmes/el-camino.jpeg', alt: 'El Camino' },
    { src: 'assets/series/one-piece-2.jpg', alt: 'One Piece' },
    { src: 'assets/filmes/django.jpeg', alt: 'Django Livre' },
    { src: 'assets/filmes/top-gun.jpg', alt: 'Top Gun Maverik' },
    { src: 'assets/series/peaky-blinders.jpeg', alt: 'Peaky Blinders' },
    { src: 'assets/series/black-mirror.png', alt: 'Black Mirror' },
    { src: 'assets/series/sandman.jpg', alt: 'Sandman' },
    { src: 'assets/series/bridgerton.jpg', alt: 'Bridgerton' },
    { src: 'assets/series/blacklist.jpeg', alt: 'The Blacklist' },
    { src: 'assets/filmes/jack-reacher.webp', alt: 'Jack Reacher' },
    { src: 'assets/series/vikings.jpg', alt: 'Vikings' },
    { src: 'assets/filmes/john-wick.jpeg', alt: 'John Wick 2' },
    { src: 'assets/series/better-call-the-saul.jpg', alt: 'Better Call the Saul' },
    { src: 'assets/series/suits.png', alt: 'Suits' },
    { src: 'assets/filmes/jogos-mortais.jpg', alt: 'Jogos Mortais Jigsaw' },
    { src: 'assets/filmes/madagascar.jpg', alt: 'Madagascar' },
    { src: 'assets/filmes/kingsman.png', alt: 'Kingsman' },
    { src: 'assets/series/the-walking-dead.png', alt: 'The Walking Dead' },
    { src: 'assets/filmes/mama.jpg', alt: 'Mama' },
    { src: 'assets/filmes/trco-em-dobro.jpeg', alt: 'Troco em Dobro' },
    { src: 'assets/filmes/donzela.jpg', alt: 'Donzela' },
    { src: 'assets/filmes/resgate-2.jpg', alt: 'O Resgate 2' },
    { src: 'assets/filmes/eu-me-importo.jpg', alt: 'Eu Me Importo' },
    { src: 'assets/filmes/mission-impossible.jpeg', alt: 'Missão Impossível' },
    { src: 'assets/series/cobra-kai.jpg', alt: 'Cobra Kai' },
    { src: 'assets/filmes/maze-runner.jpg', alt: 'Maze Runner - Correr ou Morrer' },
    { src: 'assets/series/o-ultimo-mestre-do-ar.jpg', alt: 'O Último Mestre do Ar' },
    { src: 'assets/series/wandinha.jpg', alt: 'Wandinha' },
    { src: 'assets/filmes/homem-aranha.jpg', alt: 'O Espetacular Homem Aranha' },
    { src: 'assets/filmes/horizonte-profundo.jpg', alt: 'Horizonte Profundo' },
    { src: 'assets/series/vis-a-vis.jpg', alt: 'Vis a Vis' },
    { src: 'assets/filmes/o-menino-que-descobriu-o-vento.jpg', alt: 'O Menino que Descobriu o Vento' },
    { src: 'assets/series/sweet-tooth.jpg', alt: 'Sweet Tooth' },
    { src: 'assets/series/round-6.jpg', alt: 'Round 6' },
    { src: 'assets/filmes/tropa-de-elite.jpeg', alt: 'Tropa de Elite' },
    { src: 'assets/series/house.png', alt: 'Dr. House' },
    { src: 'assets/filmes/as-branquelas.jpg', alt: 'As Branquelas' },
    { src: 'assets/filmes/estrada-sem-lei.jpg', alt: 'Estrada Sem Lei' },
]

const cardsSection = document.querySelector('#cardsSection')
const toggleButton = document.getElementById('toggleButton')
const modal = document.querySelector('#modal')
const closeModal = document.querySelector('#closeModal')
const modalTitle = document.querySelector('#modalTitle')
const modalDescription = document.querySelector('#modal-description')
// const episodeList = document.querySelector('#episodeList')
const trailer = document.querySelector('#trailer')

let mostrandoCards = false;

function displayImagens(cards, mostrarTodos) {
    cardsSection.innerHTML = '';
    const limit = mostrarTodos ? cards.length : 8

    cards.slice(0, limit).forEach((imagemElemento, index) => {

        // Cria a div com a classe 'card'
        const cardDiv = document.createElement('div')
        cardDiv.className = 'card'

        // Cria o elemento img
        const criaImagens = document.createElement('img')
        criaImagens.src = imagemElemento.src
        criaImagens.alt = imagemElemento.alt

        // Adicona a imagem na 'div'
        cardDiv.appendChild(criaImagens)

        // Adiciona a 'div' à 'section'
        cardsSection.appendChild(cardDiv)

        cardDiv.addEventListener('click', () => {
            openModal(imagemElemento);
        });
    })
}

function toggleImagens() {
    mostrandoCards = !mostrandoCards
    displayImagens(imagens, mostrandoCards)
    toggleButton.textContent = mostrandoCards ? 'Ver Menos' : 'Ver Mais'

    if (!mostrandoCards) {
        cardsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

function openModal(imagemElemento) {
    modalTitle.textContent = imagemElemento.alt || ''
    modalDescription.textContent = imagemElemento.description || '';
    // episodeList.innerHTML = ''

    imagemElemento.episodes.forEach(episode => {
        const li = document.createElement('li')
        li.textContent = episode
        // episodeList.appendChild(li)
    })

    trailer.src = imagemElemento.trailer || ''
    modal.style.display = 'flex'
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
    trailer.src = ''; //Para parar o trailer quando o modal for fechado
})


displayImagens(imagens, false)

toggleButton.addEventListener('click', toggleImagens)

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display == 'none'
        trailer.src = ''; //Para parar o trailer quando o modal for fechado
    }
})

document.querySelectorAll('.faq').forEach(faqItem => {
    const button = faqItem.querySelector('button')
    const iconePlus = faqItem.querySelector('.icone-plus')
    const infoFaq = faqItem.querySelector('.info-faq')

    button.addEventListener('click', () => {

        iconePlus.classList.toggle('icone-plus-rotate')
        iconePlus.style.transition = transicaoSuave

        if (infoFaq.classList.contains('info-faq-show')) {
            infoFaq.classList.remove('info-faq-show')
            infoFaq.style.display = 'none';
        } else {
            infoFaq.classList.add('info-faq-show')
            infoFaq.style.display = 'block'
        }
    })
})

document.querySelectorAll('.card').forEach(cardImage => {

    cardImage.addEventListener('mouseover', () => {
        cardImage.style.transition = transicaoSuave
        cardImage.classList.add('card-selecionado')
    })
    cardImage.addEventListener('mouseout', () => {
        cardImage.classList.remove('card-selecionado')
    })
})
