import { useState } from "react";
import { SafeAreaView, StatusBar, TextInput, StyleSheet, Text, Switch } from "react-native";

const Form = () => {
    const [inputValue, setInputValue] = useState()
    const [inputValid, setInputValid]= useState(true)
    const [switchValue, setSwitchValue]= useState(true)

    const onChangeValue = (value)=>{
        if(value.length >=10){
           setInputValid(true)
        }else {
            setInputValid(false)
        }
        setInputValue(value)
    }

    const changeSwitchValue = ()=>{
        setSwitchValue(!switchValue)
    }


    return (
        <SafeAreaView>
            <StatusBar/>
            <TextInput style={style.textInput}
                value={inputValue}
                onChangeText={onChangeValue}
                placeholder="Digite Aqui!"
               
            /> 
            {
                inputValid === true ? <></> : <Text>Input deve conter pelo menos 10 caracteres</Text>
            }
            <Switch
                value={switchValue}
                onValueChange={changeSwitchValue}

            />
            
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 16,
        margin: 8,
    },
    
        
})
export default Form;