import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../contexts/auth'
import { LogOut, User } from 'lucide-react'
import styles from './style.module.css'

export function TemplatePrivateRoute() {

    const { user, signOut } = useAuth()

    return user ? (
        <>
            <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
                <div className={styles.containerNavbar}>
                    <a className="navbar-brand" href="#">DASHBOARD</a>
                    <div className={styles.boxUser}>
                        <span className="text-secondary"><User/>{user.nome}</span>
                        <button className="btn btn-dark" onClick={signOut}><LogOut /></button>
                    </div>
                </div>
            </nav>

            <main className="container max-auto">
                <Outlet></Outlet>
            </main>
        </>
    ) : <Navigate to='/'></Navigate>
}