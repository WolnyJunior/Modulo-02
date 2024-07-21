import { useState } from "react"

function ComponentesControlados() {
    const [nome, setNome] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        
    }

    function resetInput() {
        setNome('')
    }
    return (
        <>
            <div className="box">
                <span>Digitando... {nome}</span>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={nome}
                        placeholder="Digite Seu Nome"
                        onChange={(event) => setNome(event.target.value)}
                    />
                    <button onClick={() => resetInput()} disabled={!nome}>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default ComponentesControlados