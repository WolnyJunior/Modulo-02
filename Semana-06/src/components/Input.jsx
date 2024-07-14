import { useState } from 'react'
import '../assets/styles/Input.css'

function Input() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleSubmit() {
        const form = {
            nome: nome,
            email: email,
            mensagem: mensagem
        }
        console.log('Formulário a ser enviado: ', form)
    }

    return (
        <>
            <div className='form'>
                <fieldset>
                    <label>Nome</label>
                    <input type="text" placeholder='Digite seu nome' value={nome} onChange={(event) => setNome(event.target.value)} />
                </fieldset>
                <fieldset>
                    <label>E-mail</label>
                    <input type="email" placeholder='Digite seu email' value={email} onChange={(event) => setEmail(event.target.value)} />
                </fieldset>
                <fieldset>
                    <label>Mensagem</label>
                    <input type="text" placeholder='Digite seu mensagem' value={mensagem} onChange={(event) => setMensagem(event.target.value)} />
                </fieldset>

                <button onClick={() => handleSubmit()}>Enviar Formulário</button>
            </div>
        </>
    )
}

export default Input