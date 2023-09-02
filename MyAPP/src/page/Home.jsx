import axios from "axios";
import { useState, useEffect, useCallback  } from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View, StyleSheet, Image} from "react-native";




const Home = () => {
    const [pokeData, setPokeData] = useState();


    const fechUserDataPokemon = useCallback(async() =>{
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
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
        return (
            <View style={style.card}>
                   <Text>NAME: {name}</Text>
               {pokeData.map((poke, index)=>{
                <View>
                     <Image src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ poke.url.split('/') [6]+'.png'}/>
                     
                </View>
               })}
            </View>
        )
            
    }
    return (
        <SafeAreaView>
            <StatusBar/>
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
        height: 300,
        marginRight: 10,
        padding: 20,
        margin: 8,
        backgroundColor: 'aqua',
    }
})

export default Home;