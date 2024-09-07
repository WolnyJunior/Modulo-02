import { useForm } from 'react-hook-form'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'


function CadastroPage() {
    const { register, handleSubmit, formState } = useForm({})
    const { errors } = formState

    async function onSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.formSignin}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <img className='mb-4' src="https://lab365-admin.hml.sesisenai.org.br/javax.faces.resource/img/logo-lab.png" alt="lab365" height='57' />

                        <h1 className='h3 mb-3 fw-normal'>Preencha todos os campos para efetuar o cadastro.</h1>
                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Nome:</label>
                            <input type="text" className='form-control' id='exampleFormControlInput1' placeholder='Digite seu nome' />
                        </div>

                         <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>E-mail:</label>
                            <input type="email" className='form-control' id='exampleFormControlInput1' placeholder='Digite seu e-mail' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Senha:</label>
                            <input type="password" className='form-control' id='exampleFormControlInput1' placeholder='Digite sua senha' />
                        </div>

                        <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
                        <p className="mt-5 mb-3 text-body-secondary">lab365 &copy; 2024</p>
                       <p>Já possui cadastro ? <Link to={-1}>Efetuar login</Link></p>

                    </form>

                </div>
            </div>
        </>
    )
}

export default CadastroPage