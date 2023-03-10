import s from "./Intro.module.css"
import introImage from "../../images/introImage.jpg"
const Intro = () => {
    return (<div className={s.intro__container}>
        <figure className={s.intro__figure}>
            <img src={introImage} alt="" className={s.intro__image} />
        </figure>
        <div className={s.intro__text}>
            <h3 className={s.text__explanation}>
                ¡Bienvenido a la página de Rick and Morty! Aquí encontrarás una lista de los diferentes personajes de esta popular serie animada. Explora nuestra selección de personajes, incluyendo a los protagonistas Rick y Morty, así como a los villanos y personajes secundarios más icónicos.
            </h3>
        </div>
    </div>)
}

export default Intro    