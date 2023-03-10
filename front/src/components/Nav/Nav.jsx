import { NavLink } from "react-router-dom"
import s from "../../components/Nav/Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import Intro from "../Intro/Intro";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
const Nav = (props) => {
    return (<>
        <Intro />
        <nav className={s.navContainer}>

            <div className={s.linksContainer}>
                <button className={`${s.favorites} ${s.next}`}>Prev Page <br /> <BsFillArrowLeftCircleFill className={s.font__icon} /></button>
                <NavLink className={s.favorites} to="/">Login</NavLink>
                <NavLink className={s.favorites} to="/home" >Home</NavLink>
                <NavLink className={s.favorites} to="/favorites" >Favorites</NavLink>
                <NavLink className={s.favorites} to="/about" >About</NavLink>
                <NavLink className={s.favorites} to="/filtro">Filtrar</NavLink>
                <button className={`${s.favorites} ${s.next}`}>Next Page <br /><BsFillArrowRightCircleFill className={s.font__icon} /> </button>

            </div>
            <SearchBar />
        </nav>

    </>)
}

export default Nav