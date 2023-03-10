import { useNavigate } from "react-router-dom";

import s from "./FilterDetail.module.css"
import { useSelector } from "react-redux";




const FilterDetail = () => {




    const navigate = useNavigate()



    const filterCharacters = useSelector((state) => state.filterCharacters)



    const goBack = () => {
        navigate("/home")
    }
    return ((

        <div>
            <button className={s.backButton} onClick={goBack}>Volver</button>
            <div className={s.cardDetail}>
                <div className={s.charInfo}>
                    <h2>{filterCharacters.name}</h2>
                    <h2>{filterCharacters.status}</h2>
                    <h2>{filterCharacters.species}</h2>
                    <h2>{(filterCharacters.origin ? filterCharacters.origin.name : "Invalid")}</h2>
                    <img className={s.charImg} src={filterCharacters.image} alt="" />
                </div>

            </div>


        </div>))
}

export default FilterDetail;