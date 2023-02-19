import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "./Detail.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getCharactersDetail } from "../../redux/actions";



const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()



    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCharactersDetail(id))
    }, [])

    const charactersDetail = useSelector((state) => state.charactersDetail)

    console.log(charactersDetail);

    const goBack = () => {
        navigate("/home")
    }
    return ((

        <div>
            <button className={s.backButton} onClick={goBack}>Volver</button>
            <div className={s.cardDetail}>
                <div className={s.charInfo}>
                    <h2>{charactersDetail.name}</h2>
                    <h2>{charactersDetail.status}</h2>
                    <h2>{charactersDetail.species}</h2>
                    <h2>{(charactersDetail.origin ? charactersDetail.origin.name : "Invalid")}</h2>
                    <img className={s.charImg} src={charactersDetail.image} alt="" />
                </div>

            </div>


        </div>))
}

export default Detail;