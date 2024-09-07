import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null, //pode ser null ou {}
    signIn: async () => { },  //função para entrar na aplicação
    signOut: () => { }  //função para remover o estado do usuário da aplicação
})

async function apiAuth(url, data) {
    console.log(url, data)
    return new Promise(resolve => setTimeout(resolve, 3000))

}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userLoggedStore = localStorage.getItem('meuLocalStorage')
        if (userLoggedStore) {
            return JSON.parse(userLoggedStore)
        }
        return null
    })

    async function signIn({ username, password }) {
        try {
            // Realizando a requisição à API com as credenciais fornecidas
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username:'emilys',
                    password:'emilyspass'
                }),
            });
    console.log(response)
            // Verificando se a resposta foi bem-sucedida
            if (!response.ok) {
                throw new Error('Credenciais inválidas');
            }
    
            // Obtendo os dados da resposta
            const data = await response.json();
    
            // Atualizando o estado e o localStorage com os dados do usuário
            setUser(data);
            localStorage.setItem('meuLocalStorage', JSON.stringify(data));
    
        } catch (error) {
            console.error("Erro de autenticação:", error);
            alert(error.message);
        }
    }

    // retorna o usuário ao estado nulo.
    function signOut() {
        setUser(null)
        localStorage.removeItem('meuLocalStorage')
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const contexto = useContext(AuthContext)
    return contexto
}