import './Hero.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Hero() {
    return (
        <>
            <div className="hero">
                <div className='text'>
                    <h1>Bedida rápida, gelada e no precinho?</h1>
                    <h1>O Zé entrega tudo.</h1>
                </div>
                <div className="input-container">
                    <i className="fa-solid fa-location-dot"></i>
                    <input type="text" placeholder='        Iserir endereço para ver preço' />
                </div>
            </div>
        </>
    )
}

export default Hero