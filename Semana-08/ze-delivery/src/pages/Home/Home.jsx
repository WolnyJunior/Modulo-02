import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Categorias from '../../components/Categorias-Produtos/Categorias'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import AgeVerificationModal from '../../components/Modal/Modal'
import './Home.css'

function Home() {

    const [isVerified, setIsVerified] = useState(false)

    // useEffect é um hook que é executado após o componente ser montado
    // O array de dependências vazio indica que este efeito deve ser executado apenas uma vez
    useEffect(() => {

        // Obtém o valor armazenado no localStorage com a chave 'isVerified'
        const isUserVerified = localStorage.getItem('isVerified')

        // Se o valor armazenado for 'true', atualiza o estado para verdadeiro
        if (isUserVerified === 'true') {
            setIsVerified(true)
        }
    }, [])// O array de dependências vazio faz com que o useEffect execute apenas uma vez

    // Função chamada quando o usuário confirma a verificação de idade
    const handleVerification = (verified) => {
        if (verified) {
            // Se o usuário confirmou que tem mais de 18 anos, atualiza o estado e armazena a confirmação no localStorage
            setIsVerified(true)
            localStorage.setItem('isVerified', 'true')
        } else {
            // Se o usuário não confirmou, exibe um alerta informando que ele não pode acessar a página
            alert('Você não tem idade para acessar essa página.')
        }
    }
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            {!isVerified && <AgeVerificationModal onConfirm={handleVerification} />}
            <Categorias></Categorias>
            <Link to='/produtos'><h1 className='products-title'>Produtos</h1></Link>
        </>
    )
}

export default Home