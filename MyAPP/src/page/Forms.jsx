import { useState } from 'react';
import {Button, SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const Forms = () => {
    const [email, onChangeEmail] = useState('');
    const [number, onChangeNumber] =useState('');
    const [info, setInfo] = useState(false);

    const onPressButton = () =>{
        setInfo(!info)
    }

    

    return (
        <SafeAreaView>
            <StatusBar/>
                <View style={style.cardText}>
                <TextInput style={style.text}
                    onChangeText={onChangeEmail}
                     value={email}
                     placeholder='Digite Email'
                />
                <TextInput style={style.text}
                     onChangeText={onChangeNumber}
                     value={number}
                     secureTextEntry={true}
                     placeholder="Senha"
                />
                    <TouchableOpacity onPress={onPressButton} style={style.button}>
                        <Text>Enviar</Text>
                    </TouchableOpacity>
                    {
                        info ? ( <>
                            <Text>{email}</Text>

                            <Text>{number}</Text>
                            </>): 
                            <></>
                    }
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
      },
})

export default Forms;