import { Link } from "react-router-dom";

const SingleCharacter = ({ item }) => {
    return ( 
        <div>
                {item.map((i) => (
                    <div key={i.char_id} className="section">
                        <div className="imgBox"><img src={i.img} alt='' /></div>
                        <div className="contentBox">
                            <div>
                                <Link to="/"><h1><span className="icon">&lt;</span>{ i.name }</h1></Link>
                                <div className="field"><span>Name:</span> {i.name}</div>
                                <div className="field"><span>Birthday:</span> {i.birthday}</div>
                                <div className="field"><span>Nickname:</span> {i.nickname}</div>
                                <div className="field"><span>Status:</span> {i.status}</div>
                                <div className="field"><span>Category:</span> {i.category}</div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
     )
}
 
export default SingleCharacter;