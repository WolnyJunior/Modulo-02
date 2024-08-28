import React from 'react'
import './categorias.css'
import categoriasData from './Categorias.json'

function Categorias() {
    const categorias = categoriasData.categorias

    return (
        <>
            <div className="container-categorias">
                <ul>
                    {categorias.map(categoria => <li key={categoria.id}>
                        <div className="produto">
                            <img src={categoria.imagem} alt="Imagem Produto" />
                            <p>{categoria.texto}</p>
                        </div>
                    </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Categorias