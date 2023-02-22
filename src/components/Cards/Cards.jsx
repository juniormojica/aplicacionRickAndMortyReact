

import Card from '../Card/Card';
import s from "./Cards.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { getAllCharacters } from "../../redux/actions"

import { useEffect, } from 'react';

export default function Cards(props) {

   const dispatch = useDispatch()
   useEffect(() => {

      dispatch(getAllCharacters())

   }, [])

   const characters = useSelector((state) => state.characters)


   return (
      <div className={s.cardsContainer}>
         {

            characters && characters.map((char, index) => {
               return (<div key={index}> <Card
                  name={char.name}
                  image={char.image}
                  onClose={props.onClose}
                  id={char.id}
               />
               </div>)
            })
         }


      </div>)


}
