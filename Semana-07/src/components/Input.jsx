import { useState } from 'react'

function Input() {

    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    function handleSubmit() {
        setList([...list, input])
        setInput('')
    }

    return (
        <>
            <div className='form'>
                <fieldset>
                    <input type="text" placeholder='Digite algo...' value={input} onChange={(event) => setInput(event.target.value)} />
                </fieldset>

                <button onClick={() => handleSubmit()}>Enviar Formulário</button>

                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Input