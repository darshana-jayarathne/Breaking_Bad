import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

//components
import SingleCharacter from "../components/characters/SingleCharacter";

const Character = () => {

    const { id } = useParams()

    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async() => { 
        const result = await axios(`https://www.breakingbadapi.com/api/characters/${id}`)
        setItem(result.data)
        setIsLoading(false)
        }
        fetchItems()
    },[id])
    
    return (
        isLoading ? (
            <h1 className="loading">Loading...</h1>
        ) : (
                <SingleCharacter item={ item }/> 
            )
     );
}
 
export default Character;