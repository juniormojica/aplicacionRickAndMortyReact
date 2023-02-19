import { NavLink } from "react-router-dom"
import s from "../../components/Nav/Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
const Nav = (props) => {
    return (

        <nav className={s.navContainer}>
            <div className={s.linksContainer}>
                <NavLink className={s.aboutLink} to="/about">About</NavLink>
                <NavLink className={s.homeLink} to="/">Login</NavLink>
                <NavLink className={s.favorites} to="/favorites" >Favorites</NavLink>
                <NavLink className={s.favorites} to="/home" >Home</NavLink>
            </div>

            <SearchBar

            />

        </nav>

    )
}

export default Nav