import { useState } from 'react';
import {Button, SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const Forms = () => {
    const [email, setEmail] = useState();
    const [number, setNumber] =useState('');
    const [info, setInfo] = useState(false);
    const [inputValid, setInputValid]= useState(true)
    const [inputValidSenha, setInputValidSenha]= useState(true)

    const onChangeEmail = (value) =>{
       if(value.length >= 10){
         setInputValid(true)
       } else {
        setInputValid(false)
       }
       setEmail(value)
    }
    const onChangeSenha = (value) =>{
        if(value.length >= 8){
            setInputValidSenha(true)
        } else {
            setInputValidSenha(false)
        }
        setNumber(value)
     }


    const onPressButton = () =>{
        setInfo(!info)
    }

    

    return (
        <SafeAreaView style={style.cards}>
            <StatusBar/>
                <View >
                <TextInput style={style.text}
                    onChangeText={onChangeEmail}
                     value={email}
                     placeholder='Digite Email'
                />
                    {!inputValid ? <Text>Email deve conter pelo menos 10 caracteres</Text> : <></>}

                <TextInput style={style.text}
                     onChangeText={onChangeSenha}
                     value={number}
                     secureTextEntry={true}
                     placeholder="Senha"
                /> 
                  {!inputValidSenha ? <Text>Senha deve conter pelo menos 8 caracteres</Text> : <></>}

            
                    <TouchableOpacity onPress={onPressButton} style={style.button}>
                        <Text>Enviar</Text>
                    </TouchableOpacity>
    
             </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    cardText: {
        padding: 12,
        backgroundColor: '#F5FFFA	',
        margin: 8,
        borderRadius: 12,
        
    },
    text: {
        textAlign: 'center',
        
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'aqua',
        padding: 10,
        marginTop: 12
          },
      cards: {
        backgroundColor: '#a3f3f7',
        borderRadius: 15,
        margin: 8,
        padding: 20,
      }
})

export default Forms;