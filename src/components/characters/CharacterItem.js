import { Link } from "react-router-dom"

const CharacterItems = ({ item }) => {
     
    return (
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <Link to={`/character/${item.char_id}`}><img src={item.img} alt='' /></Link>
          </div>
        </div>
    </div>
    )
}

export default CharacterItems