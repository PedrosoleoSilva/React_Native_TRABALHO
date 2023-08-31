import { FlatList, SafeAreaView, StatusBar, Text, View, StyleSheet } from "react-native";

const pokemonData = [
    {
        name: 'Pikachu',
        type: 'Elétrico',
    },
    {
        name: 'Charmander',
        type: 'Fogo',
    },
    {
        name: 'Psyduck',
        type: 'Psíquico',
    }
]

const PokemonItem = ({pokemon}) =>{

    const {name, type} = pokemon
    return(
        <View style ={style.pokemonCard}>
            <Text style={style.text}>Pokemon: {pokemon.name}</Text>
            <Text style={style.text}>Tipo: {type}</Text>
        </View>
    )
}

const ListPage = () => {
    return (
        <SafeAreaView>
            <StatusBar/>
                <FlatList
                    data={pokemonData}
                    renderItem={({item}) => <PokemonItem  pokemon ={item}/>}
                />
           
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    pokemonCard: {
        padding: 14,
        backgroundColor: '#fa3007',
        margin: 8,
        borderRadius: 14,
    },
    text: {
        color: '#ffff',
        fontSize: 24,

    }
})

export default ListPage;