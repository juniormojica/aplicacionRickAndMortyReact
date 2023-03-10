import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { chargeFilterCharacters } from "../../redux/actions"



const Filter = () => {
    const { filterCharacters } = useSelector((state) => state)
    const dispatch = useDispatch()
    const [char, setChar] = useState({

    })

    useEffect(() => {

        dispatch(chargeFilterCharacters())
        console.log("estos son" + filterCharacters);

    }, [])

    return (

        <div>
            {filterCharacters && filterCharacters.map((char) => {

                return
            })}

        </div>
    )
}

export default Filter