import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'

function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (email === 'admin@admin.com' && senha === '123') {
            navigate('/')
            return
        }
        alert('E-mail e/ou senha incorretos.')
    }
    return (
        <>
            <div className='containerLogin'>

                <div className='container-login'>

                    <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Logo" />

                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <button>Entrar</button>
                    </form>

                </div>

                <Link to='/cadastro'><button>Cadastre-se</button></Link>

            </div>
        </>
    )
}

export default Login