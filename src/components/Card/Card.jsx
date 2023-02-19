import s from "./Card.module.css"
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { deleteCharacter } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {

    const dispatch = useDispatch()
    const [favorite, setFavorite] = useState(false)

    const handleFavorite = () => {

        if (favorite) {
            setFavorite(!favorite)
        } else {
            setFavorite(true)
        }
    }

    const handleClose = () => {
        dispatch(deleteCharacter(props.id))
        console.log(props.id);
    }
    return (
        <div className={s.cardContainer} >
            <div className={s.likeContainer}>
                <button onClick={handleFavorite} className={`${s.addFavorite} ${(favorite ? s.favoriteStatus : "")} `}>Add Fav</button>
            </div>

            <button className={s.close} onClick={handleClose}>X</button>

            <div>
                <Link className={s.charName} to={`detail/${props.id}`}>
                    <h2 >{props.name}</h2>
                </Link>
                <img className={s.cardImg} src={props.image} alt="" />
            </div>

        </div>
    );
}
