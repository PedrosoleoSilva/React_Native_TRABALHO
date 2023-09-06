import { useState } from "react";
import { SafeAreaView, StatusBar, View, StyleSheet, Text, Image, TextInput } from "react-native";

const Informs = () => {
    const [inputName, setInputName] = useState()
    const [inputSenha, setInputSenha] = useState()

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${4}.png`;

    return (
        <SafeAreaView>
            <StatusBar/>
            <View style={style.card}>
                <View>
                <Image source={{ uri: imageUrl }} style={style.image} />
                <Text style={style.testo} >R$: 999.99</Text>
                <Text style={style.testo}>Charmander</Text>
                <View style={style.inputName}>
                    <TextInput style={style.textInput}
                    onChangeText={setInputName}
                    value={inputName}
                    placeholder="DIGITE O NOME DO POKEMON"
                />
                    <TextInput style={style.textInput}
                        onChangeText={setInputSenha}
                        value={inputSenha}
                        placeholder="DIGITE A SENHA AQUI"
                    />
                </View>
                
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
      }, 
      inputName: {
        margin:12,
        padding: 8,
        borderRadius:12,
        backgroundColor: '#fff',
        gap: 4
      }, 
      textInput: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
      }
})

export default Informs;