import { useState } from "react"
import validation from './validaton'
import styles from './Form.module.css'
import landing from '../../assets/landing.webp'


const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })
    const handleOnChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <div className={styles.divForm}>
            <div>
                <img src={landing} alt="logo" />

            </div>
            
            <div>
                <h1 className={styles.title}>Bienvenido!</h1>
                <p>Por favor, ingresa tus datos para iniciar sesión</p>
                <form onSubmit={handleSubmit} className={styles.styledForm}>
                    <label htmlFor="username">Email:</label>
                    <input type="text" name="username" value={userData.username} onChange={handleOnChange} />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={userData.password} onChange={handleOnChange} />{errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                    <button>LOGIN</button>
                </form>
            </div>
        </div>
    )

}

export default Form