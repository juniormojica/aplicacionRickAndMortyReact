import s from "./Card.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteCharacter } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { AiOutlineHeart, AiFillCloseCircle } from 'react-icons/ai';


export default function Card(props) {

    const dispatch = useDispatch()
    const charstToFav = useSelector((state) => state.characters)


    const [favorite, setFavorite] = useState(false)

    const handleFavorite = () => {

        if (!favorite) {
            setFavorite(true)

            const favoriteOne = charstToFav.filter((char) => {
                return char.id === props.id;
            })
            console.log(favoriteOne);

            dispatch(addFavorite(favoriteOne[0]))


        } else {
            setFavorite(false)
            dispatch(deleteFavorite(props.id))
        }
    }

    const handleClose = () => {
        dispatch(deleteCharacter(props.id))

    }
    return (
        <div className={s.cardContainer} >
            <div className={s.likeContainer}>
                <button onClick={handleFavorite} className={` ${s.button} ${(favorite ? s.favoriteStatus : "")} `}><AiOutlineHeart className="s.favorite" /></button>
            </div>

            <button className={s.close} onClick={handleClose}><AiFillCloseCircle className={s.favButton} /></button>

            <div>
                <Link className={s.charName} to={`detail/${props.id}`}>
                    <h2 >{props.name}</h2>
                </Link>
                <img className={s.cardImg} src={props.image} alt="" />
            </div>

        </div>
    );
}
