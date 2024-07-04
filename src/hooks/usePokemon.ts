import {useEffect, useState} from "react";
import axios from "axios";

type pokemon = {
    species: {
        name:string,
        url:string
    },
    sprites: {
        back_default:string| null
        back_female:string | null
        back_shiny:string | null
        back_shiny_female:string | null
        front_default:string | null
        front_female:string | null
        front_shiny:string | null
        front_shiny_female:string | null
    }
}

export function usePokemon() {
    const [pokemon,setPokemon] = useState<pokemon>({species: {name: "", url: ""},
        sprites: {
            back_default: null,
            back_female: null,
            back_shiny: null,
            back_shiny_female: null,
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null
        }
    });
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
            setPokemon(res.data)
        })
    }, []);
    useEffect(() => {

    },[])

    return {pokemon,setPokemon}
}