import '../assets/styles/Footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="" />
                <div className='contato'>
                    <ul>
                        <h2>CONTATO</h2>
                        <li>+55 51 9969-6969</li>
                        <li>email@email.com</li>
                    </ul>
                    <ul>
                        <li>Rua dos Bobos, 0 - Asteróide B612</li>
                        <li>Via Láctea - Universo</li>
                    </ul>
                    <div className='redes-sociais'>
                        <img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram.svg" alt="" />
                        <img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook.svg" alt="" />
                        <img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube.svg" alt="" />
                    </div>
                </div>
                <div className='informacoes'>
                    <ul>
                        <h2>INFORMAÇÕES</h2>
                        <li>Bicicletas</li>
                        <li>Seguros</li>
                        <li>Contato</li>
                        <li>Termos e Condições</li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default Footer