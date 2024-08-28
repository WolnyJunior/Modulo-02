import './Cadastro.css'
import { Link } from 'react-router-dom'
import ButtonLogin from '../../components/Buttons/ButtonLogin'
import ButtonCadastro from '../../components/Buttons/ButtonCadastro'
import FooterLogin from '../../components/Footer/Footer'

function Cadastro() {
    return (
        <>
            <div className="container-cadastro">
                <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logo Zé Delivery" />
                <div className="volta-pagina">
                    <Link to='/'><i className="fa-solid fa-arrow-left"></i></Link>

                    <p>Entrar na conta com outros serviços:</p>
                    <span></span>
                </div>
                <div className='button-cadastro'>
                    <ButtonLogin></ButtonLogin>
                </div>

                <span className='text-line'>ou</span>

                <div className='text-center'>
                    <p>Insira seu e-mail para entrar ou se cadastrar:</p>
                </div>

                <div className='cadastro'>
                    <ButtonCadastro></ButtonCadastro>
                </div>

                <span className='ajuda'>Precisa de alguma ajuda? Entre no <span className='destaque-me-ajuda'>Me Ajuda, Zé!</span></span>

                <div className='rodape-cadastro'>
                    <FooterLogin></FooterLogin>
                </div>

            </div>
        </>
    )
}

export default Cadastro