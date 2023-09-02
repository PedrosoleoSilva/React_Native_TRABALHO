import { SafeAreaView, StatusBar, View, StyleSheet, Text, Image } from "react-native";

const Informs = () => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${4}.png`;

    return (
        <SafeAreaView>
            <StatusBar/>
            <View style={style.card}>
                <View>
                <Image source={{ uri: imageUrl }} style={style.image} />
                <Text style={style.testo} >R$: 999.99</Text>
                <Text style={style.testo}>Charmander</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    fundo: {
        backgroundColor: 'yello'
    },
    card: {
        backgroundColor: 'aqua',
        width: 400,
        height: 700,
        marginLeft: 50,
        marginTop: 200,
        borderRadius: 20,
        borderWidth: 4
    },
    image: {
        width: 400,
        height: 400,
      },
      testo: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 30,
      }
})

export default Informs;