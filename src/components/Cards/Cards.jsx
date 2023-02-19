

import Card from '../Card/Card';
import s from "./Cards.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { getAllCharacters } from "../../redux/actions"

import { useEffect, } from 'react';

export default function Cards(props) {

   const dispatch = useDispatch()
   useEffect(() => {
      console.log("Se montó");
      dispatch(getAllCharacters())


   }, [])

   const characters = useSelector((state) => state.characters)


   console.log(characters);



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
{/* {<h1>{characters.characters[2].name}</h1>} */ }

// {
//    characters.map((char, index) => {
//       return (<div key={index}> <Card
//          name={char.name}
//          specie={char.species}
//          gender={char.gender}
//          image={char.image}
//          onClose={props.onClose}
//          id={char.id}
//       />
//       </div>)
//    })
// } * /}