import s from "./SearchBar.module.css"
import { useState } from "react";



export default function SearchBar(props) {

    const [character, setCharacter] = useState(null)

    const getIdCharacter = (e) => {
        const idCharacter = e.target.value
        setCharacter(idCharacter)
        console.log(character)
    }

    return (<>
        <h1 className={s.tittle}>Rick And Morty App</h1>
        <div className={s.searchContainer} >

            <input
                onChange={getIdCharacter}
                type='search'
                className={s.searchInput}
            />

            <button

                className={s.searchButton}
            > Agregar</button>
        </div>

    </>

    );
}
