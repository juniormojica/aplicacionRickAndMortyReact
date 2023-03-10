import styles from "./SearchBar.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SendinputId } from "../../redux/actions";
export default function SearchBar(props) {
   const dispatch = useDispatch()
   const [idPersonaje, setidPersonaje] = useState("")

   const changeCharacter = (event) => {

      const value = event.target.value;
      setidPersonaje(value)


   }
   return (
      <div className={`${styles.center}`}>
         <input placeholder="Escribe un numero Para filtrar personaje" onChange={changeCharacter} type='search' className={`${styles.search} `} />
         <button className={styles.buttonSearch} onClick={() => { dispatch(SendinputId(idPersonaje)) }}>Agregar</button>
      </div>
   );
}
