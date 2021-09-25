import Pokecard from "./Pokecard";
import "./Pokedex.css"

const Pokedex = ({pokemon}) => {
    return(
        <div className="Pokedex">
            {pokemon.map(p => (
                <Pokecard pokemon={p} key={p.id}/>
            ))}
        </div>
    )
};

export default Pokedex;