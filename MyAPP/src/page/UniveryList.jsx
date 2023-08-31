import axios from "axios";
import { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View, StyleSheet } from "react-native";



const UniverLista = ({uni}) => {

    const {name, alpha_two_code} = uni
    return (
        <View style={style.cardList}>
            <Text style={style.text}>Name: {name}</Text>
            <Text style={style.text}>Alpha: {alpha_two_code}</Text>
        </View>
    )
}

const UniveryList = () => {
    const [univer, setUniver] = useState()

    const fetchUnivertys = async() =>{
        try {
            const {data} = await axios.get('http://universities.hipolabs.com/search?country=Brazil')
            setUniver(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchUnivertys();
    }, []);

    return (
        <SafeAreaView>
            <StatusBar/>
                <FlatList 
                    data={univer}
                    renderItem={({item}) => <UniverLista uni={item} />}
                />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    cardList: {
        padding: 12,
        backgroundColor: '#fa3007',
        margin: 8,
        borderRadius: 20,
    },
    text: {
        fontSize: 18,
    }
})

export default UniveryList;