import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './routes/routes'
import { AuthProvider } from './contexts/auth'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {


  return (
    <>
      <AuthProvider>
        <Router>
          <AppRoutes></AppRoutes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
