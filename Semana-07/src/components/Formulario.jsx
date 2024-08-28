import { useEffect, useState } from "react"

function Formulario() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState('')
    const [formularioCompleto, setFormularioCompleto] = useState(false)
    const [formularioInvalido, setFormularioInvalido] = useState(false)
    const [emailValido, setEmailValido] = useState(true)

    useEffect(() => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const emailValido = emailRegex.test(email)
        setEmailValido(emailValido)

        const formValues = [nome, email, idade]
        const filledFields = formValues.reduce((count, value) => (value ? count + 1 : count), 0)

        if (filledFields === 3 && emailValido) {
            setFormularioCompleto(true)
        } else {
            setFormularioCompleto(false)
        }
    }, [nome, email, idade])

    useEffect(() => {
        if (!nome || !email || !idade) {
            setFormularioInvalido(true)
        } else {
            setFormularioInvalido(false)
        }
    })

    function handleSubmit() {

        if (nome === '' || email === '' || idade === '') {
            console.log('Formulário incompleto, preencher todos os campos.')

        } else {
            console.log('Formulário a ser enviado: ', { nome, email, idade })
            setNome('')
            setEmail('')
            setIdade('')
        }
    }

    return (
        <>
            <div className='form'>
                <fieldset>
                    <label>Nome</label>
                    <input type="text" placeholder='Digite seu nome' value={nome} onChange={(event) => setNome(event.target.value)} />
                    <p>{nome}</p>
                </fieldset>
                <fieldset>
                    <label>E-mail</label>
                    <input type="email" placeholder='Digite seu email' value={email} onChange={(event) => setEmail(event.target.value)} />
                    {!emailValido && <p style={{ color: 'red' }}>Email inválido</p>}
                    <p>{email}</p>
                </fieldset>
                <fieldset>
                    <label>Idade</label>
                    <input type="number" placeholder='Digite sua idade' value={idade} onChange={(event) => setIdade(event.target.value)} />
                    <p>{idade}</p>
                </fieldset>

                <button onClick={() => handleSubmit()}>Enviar Formulário</button>

                {formularioCompleto && <p>O Formulário está completamente preenchido.</p>}
                {formularioInvalido && <p>O Formulário ainda não foi preenchido.</p>}
            </div>
        </>

    )
}

export default Formulario