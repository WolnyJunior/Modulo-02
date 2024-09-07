import { useForm } from 'react-hook-form'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'


function CadastroPage() {
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            idade: 0
        }
    })
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
                            <input type="text"
                                className={`form-control ${errors.nome && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Digite seu nome'
                                aria-invalid={!!errors.nome}
                                {...register('nome', {
                                    required: {
                                        value: true,
                                        message: 'Campo obrigatório.'
                                    }
                                    ,
                                    maxLength: {
                                        value: 15,
                                        message: 'Esse campo permite um número máximo de 15 caracteres.'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Esse campo necessita de um número mínimo de 5 caracteres.'
                                    },
                                    validate: (value) => {
                                        const trimmedValue = value.trim(); // Remove espaços no início e no final
                                        if (trimmedValue === '') {
                                            return 'O nome não pode ser apenas espaços em branco.';
                                        } else if (!/^[\S]+(\s[\S]+)*$/.test(trimmedValue)) {
                                            return 'O nome não pode conter espaços consecutivos.';
                                        } else if (trimmedValue.length < 5 || trimmedValue.length > 15) {
                                            return 'O nome deve ter entre 5 e 15 caracteres.';
                                        }
                                        return true;
                                    }
                                })}
                            />
                        </div>
                        {/* VALIDAÇÃO Nome de usuário */}
                        {errors.nome && <span className='text-danger text-xs'>{errors.nome.message}</span>}

                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Idade:</label>
                            <input
                                type="number"
                                className={`form-control ${errors.idade && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                aria-invalid={!!errors.idade}
                                {...register('idade', {
                                    min: {
                                        value: 18,
                                        message: 'Não permitido para menores de 18 anos'
                                    }
                                })}
                            />
                        </div>
                        {/* VALIDAÇÃO da IDADE do Usuário */}
                        {errors.idade && <span className='text-danger text-xs'>{errors.idade.message}</span>}

                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>E-mail:</label>
                            <input type="email"
                                className={`form-control ${errors.email && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Digite seu e-mail'
                                aria-invalid={!!errors.email}
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Campo obrigatório.'
                                    }
                                })}
                            />
                        </div>
                        {/* VALIDAÇÃO da EMAIL do Usuário */}
                        {errors.email && <span className='text-danger text-xs'>{errors.email.message}</span>}

                        <div className='mb-3'>
                            <label htmlFor="exampleFormControlInput1" className='form-label'>Senha:</label>
                            <input type="password"
                                className={`form-control ${errors.senha && 'is-invalid'}`}
                                id='exampleFormControlInput1'
                                placeholder='Digite sua senha'
                                aria-invalid={!!errors.senha}
                                {...register('senha', {
                                    minLength: {
                                        value: 8,
                                        message: 'A senha deve conter no mínimo 8 dígitos.'
                                    },
                                    required: {
                                        value: true,
                                        message: 'Campo obrigatório.'
                                    }
                                })}
                            />
                        </div>
                        {/* VALIDAÇÃO da SENHA do Usuário */}
                        {errors.senha && <span className='text-danger text-xs'>{errors.senha.message}</span>}

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