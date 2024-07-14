import { useEffect, useState } from "react"

function NewsAPI() {

    const [post, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    async function getPost() {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias')
            const data = await response.json()
            // console.log(data)
            setPost(data)
        } catch (error) {

        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        isLoading ? <span>Carregando post...</span> : (
            <div>
                <h1>{post.items[0].titulo}</h1>
                <p>{post.items[0].introducao}</p>
            </div>
        )
    )
}

export default NewsAPI