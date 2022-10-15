import { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterGrid from "../components/characters/CharacterGrid"
import Header from '../components/Header'

const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async() => { 
        const result = await axios(`https://www.breakingbadapi.com/api/characters`)
        setItems(result.data)
        setIsLoading(false)
        }
        fetchItems()
    },[])
    return (
        <div>
            <Header/>
            <CharacterGrid isLoading={isLoading} items={ items }></CharacterGrid>
        </div>
    )
}

export default Home