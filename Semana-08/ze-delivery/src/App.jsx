import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Produtos from './pages/Produto/Produto'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/cadastro' Component={Cadastro}></Route>
          <Route path='/produtos' Component={Produtos}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
