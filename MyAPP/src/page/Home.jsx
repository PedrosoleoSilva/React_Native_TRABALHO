import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  const [pokeData, setPokeData] = useState([])
  const [page, setPage] = useState(0)

  const fetchUserDataPokemon = useCallback(async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${page * 50}`)
      setPokeData((prevData) => [...prevData, ...response.data.results])
    } catch (error) {
      console.error(error)
    }
  }, [page])

  useEffect(() => {
    fetchUserDataPokemon()
  }, [fetchUserDataPokemon])

  const Pokemon = ({ item }) => {
    const { name, url } = item
    const pokemonId = url.split("/")[6]
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`

    const handleItemClick = () => {
      navigation.navigate("ItemDetails", { item })

    }

    return (
      <TouchableOpacity style={styles.card} onPress={handleItemClick}>
        <Text style={styles.texto}>{name}</Text>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.url}>{url}</Text>
      </TouchableOpacity>
    )
  }

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text style={styles.cabecalho}>POKEMONS</Text>
      </View>
      <FlatList
        data={pokeData}
        renderItem={({ item }) => <Pokemon item={item} />}
        keyExtractor={(item) => item.name}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
      />
      <Text>HELLO</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 400,
    height: 280,
    padding: 10,
    margin: 8,
    backgroundColor: "aqua",
    marginLeft: 30,
    borderRadius: 20,
  },
  image: {
    width: 240,
    height: 180,
  },
  texto: {
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 20,
  },
  cabecalho: {
    textAlign: "center",
    backgroundColor: "aqua",
    padding: 30,
    textTransform: "uppercase",
  }, url: {
    fontWeight: "bold",
    textAlign: 'center',
    textTransform: "uppercase",
  }
});

export default Home;