import { Route, Routes } from 'react-router-dom'
import CadastroPage from '../pages/cadastro/Cadastro'
import HomePage from '../pages/home/HomePage'
import LoginPage from '../pages/login/LoginPage'
import { TemplatePrivateRoute } from '../templates/private-routes'
function AppRoutes() {
    return (
        <>
            <Routes>

                {/* ROTAS PUBLICAS */}

                <Route path='/' element={<LoginPage />}></Route>
                <Route path='/cadastro' element={<CadastroPage />}></Route>

                {/* ROTAS PRIVADAS */}

                <Route path='/dashboard' element={<TemplatePrivateRoute></TemplatePrivateRoute>}>
                    <Route path='/dashboard' element={<HomePage />}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes