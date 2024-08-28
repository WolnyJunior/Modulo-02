import './ButtonLogin.css'

function ButtonLogin() {
    return (
        <>
            <div className="buttons-login">
                <button className='facebook'><i class="fa-brands fa-facebook"></i><div className='border-left'></div><span>CONTINUAR COM FACEBOOK</span><span></span></button>
                <button className='apple'><i class="fa-brands fa-apple"></i><div className='border-left'></div><span>CONTINUAR COM A APPLE</span><span></span></button>
            </div>
        </>
    )
}

export default ButtonLogin