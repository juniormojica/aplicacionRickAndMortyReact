import s from "./Favorites.module.css"
import { useNavigate, Link } from "react-router-dom"
const Favorites = () => {

    return (
        <div>
            <section className={s.homeBack}>
                <Link className={s.homeLink} to="/home">See all characters
                </Link>
            </section>
            <h2>Favoritos</h2>
        </div>
    )
}

export default Favorites