import s from "./Favorites.module.css"
import { useNavigate, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { cleanFavorites } from "../../redux/actions"


const Favorites = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        return () => {
            dispatch(cleanFavorites())
        }
    }, [])
    const favorites = useSelector((state) => state.favorites)
    console.log(favorites);

    return (
        <div>
            <section className={s.homeBack}>
                <Link className={s.homeLink} to="/home">See all characters </Link>
            </section>

            <div className={s.mainContainer}>
                {favorites && favorites.map((fav) => {

                    return <div className={s.favContainer}>
                        <h2>{fav.name}</h2>

                        <h3>{fav.gender}</h3>
                        <h3>{fav.status}</h3>
                        <h3>{fav?.origin?.name}</h3>
                        <h3>{fav.created}</h3>
                        <div>
                            <img className={s.favImg} src={fav.image}></img>
                        </div>
                    </div>


                })}

            </div>





        </div>
    )
}

export default Favorites