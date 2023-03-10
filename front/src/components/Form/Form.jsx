import { useState } from "react"
import s from "./Form.module.css"
import loginImg from "../../images/loginImg.jpg"
import validate from "./validation"
const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleForm = (event) => {
        const property = event.target.name
        const value = event.target.value

        setUserData({
            ...userData,
            [property]: value
        })

        setErrors(validate({
            ...userData,
            [property]: value
        }))


    }



    const handleLogin = (event) => {
        event.preventDefault();
        login(userData)
    }
    return (
        <div>
            <div>
                <h1>Bienvenido a la App </h1>
            </div>
            <div className={s.loginContainer}>


                <form onSubmit={handleLogin} className={s.formContainer}>
                    <div className={s.imgContainer}>
                        <img src={loginImg} alt="" />
                    </div>

                    <label htmlFor="email" className={s.labels}>Correo:</label>
                    <input
                        className={`${s.inputs} ${errors.email && s.warning}`}
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleForm}
                    />
                    {errors.email && <p>{errors.email}</p>}

                    <label htmlFor="email" className={s.labels}>Contraseña:</label>
                    <input
                        className={`${s.inputs} ${errors.password && s.warning}`}
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleForm}
                    />

                    {errors.password && <p>{errors.password}</p>}

                    <button type="submit" className={s.button}>Log in</button>
                    <h3>Usuario :admin@gmail.com</h3>
                    <h3>Contraseña :Admin124*</h3>
                </form>
            </div>


        </div>)
}

export default Form;