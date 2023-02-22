import perfil from "../../images/perfil.jpg"
import { useNavigate } from "react-router-dom";
import s from "../About/About.module.css"
import { FaReact } from "react-icons/fa"
const About = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate("/home")
    }
    return ((

        <div>
            <button className={s.backButton} onClick={goBack}>Volver</button>
            <div className={s.cardDetail}>
                <div className={s.charInfo}>
                    <h2>Junior Mojica</h2>
                    <h2><FaReact />Desarrollador Web <FaReact /> </h2>
                    <h2>Human</h2>
                    <h2>Colombia</h2>
                    <img className={s.charImg} src={perfil} alt="Junior Mojica" />
                </div>
                <div className={s.aboutContainer}>
                    <p>Hola!, mi nombre es junior Mojica , soy desarrollador Web full
                        stack en Proceso. desarrollé esta pagina para poner a pruebas los conocimientos
                        aprendidos en el bootcamp de henry espero sea de tu agrado </p>
                </div>

            </div>


        </div >))
}

export default About