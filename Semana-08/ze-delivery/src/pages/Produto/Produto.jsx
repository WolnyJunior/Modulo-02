import { Link } from "react-router-dom"
import './Produto.css'

function Produtos() {
    return (
        <>
            <div className="container-products">
                <h1>Produtos</h1>
                <Link to='/'>Home</Link>
            </div>
        </>
    )
}

export default Produtos