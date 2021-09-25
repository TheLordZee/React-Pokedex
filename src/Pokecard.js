import "./Pokecard.css"

const Pokecard = ({pokemon}) => {
    console.log(pokemon)
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    return(
        <div className="Pokecard">
            <h4 className="Pokecard-header">{pokemon.name}</h4>
            <img src={src}/>
            <div>
                <p className="Pokecard-details">Type: {pokemon.type}</p>
                <p className="Pokecard-details">EXP: {pokemon.base_experience}</p>
            </div>
        </div>
    )
}

export default Pokecard;