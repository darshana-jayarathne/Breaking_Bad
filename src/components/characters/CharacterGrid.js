import CharacterItem from "./CharacterItem"

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <h1 className="loading">Loading...</h1>
    ) : (
            <section className="cards">
                {items.map((item) => (
                    <CharacterItem key={item.char_id} item={item}></CharacterItem>
                ))}
            </section>
    )
}

export default CharacterGrid