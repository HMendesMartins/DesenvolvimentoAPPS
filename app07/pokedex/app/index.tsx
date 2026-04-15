import {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

export default function App(){
    interface Pokemon {
        name: string;
        url: string;
    };

    const [pokemons, setPokemons] = useState([])
    
    useEffect( ()=> {
        buscarPokemons()
    }, [])
    async function buscarPokemons() {
        const resposta = await fetch(
            "https://pokeapi.co/api/v2/pokemon/?limit=232");
            const data = await resposta.json();
            setPokemons(data.results);
    }
    return (
        <ScrollView>
            {pokemons.map((pokemon) => (
                <View key={pokemon.name}>
                    <Text>{pokemon.name}</Text>
                </View>
            ))}
        </ScrollView>
    )
}
