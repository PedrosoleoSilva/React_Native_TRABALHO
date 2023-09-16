import { useState } from "react";
import { SafeAreaView, StatusBar, View, StyleSheet, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";

const Informs = () => {
    const [inputName, setInputName] = useState()
    const [inputSenha, setInputSenha] = useState()

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${4}.png`;
    <Image source={require('../assets/poke_1.gif')} style={style.gif} />
    return (
        <SafeAreaView>
            <StatusBar/>
            <View style={style.card}>
                <Image source={require('../assets/poke_77.gif')} style={style.gif} />
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

            <TouchableOpacity  style={style.button} >
                <Text>Enviar</Text>
            </TouchableOpacity>
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
      },
      button: {
        alignItems: 'center',
        backgroundColor: 'aqua',
        padding: 10,
        marginTop: 12,
      },
      gif: {
        width: 160,
        height: 300,
        marginLeft: 60,
      },
})

export default Informs;