import axios from "axios";
import { useState, useEffect, useCallback  } from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View, StyleSheet, Image, } from "react-native";




const Home = () => {
    const [pokeData, setPokeData] = useState([]);


    const fechUserDataPokemon = useCallback(async() =>{
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
            setPokeData(response.data.results)
        } catch (error) {
            console.error(error)
        }
    },[])

    useEffect(() => {
        fechUserDataPokemon()
    }, []);

    const Pokemon = ({itens}) =>{
        const {name, url} = itens
        const pokemonId = url.split("/")[6];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
        //const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1${pokemonId}.svg`
        return (
            <View style={style.card}>
            <Text style={style.texto}> {name}</Text>
            <Image source={{ uri: imageUrl }} style={style.image} />
            <Text>{url}</Text>
          </View>

        )
            
    }
    return (
        <SafeAreaView>
            <StatusBar/>
            <View>
                <Text style={style.cabecalho}>POKEMONS</Text>
            </View>
                <FlatList
                    data={pokeData}
                    renderItem={({item}) => <Pokemon itens={item}/> }
                />
                <Text>HELLO</Text>
        </SafeAreaView>
    );
}


const style = StyleSheet.create({
    card: {
        width: 200,
        height: 280,
        padding: 10,
        margin: 8,
        backgroundColor: 'aqua',
        marginLeft: 30,
        borderRadius: 20,
    },
    image: {
        width: 180,
        height: 180,
      },
      texto: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 20,
      },
      cabecalho: {
        textAlign: 'center',
        backgroundColor: 'aqua',
        padding: 30,
        textTransform: 'uppercase',

      }
})

export default Home;