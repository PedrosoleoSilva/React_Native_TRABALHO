import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View, StyleSheet, Image } from "react-native";

const Home = () => {
  const [pokeData, setPokeData] = useState([]);

  const fetchUserDataPokemon = useCallback(async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
      setPokeData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchUserDataPokemon();
  }, []);

  const Pokemon = ({ item }) => {
    const { name, url } = item;
    const pokemonId = url.split("/")[6];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    return (
      <View style={styles.card}>
        <Text>NAME: {name}</Text>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={pokeData}
        renderItem={({ item }) => <Pokemon item={item} />}
        keyExtractor={(item) => item.name}
      />
      <Text>HELLO</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    marginRight: 10,
    padding: 20,
    margin: 8,
    backgroundColor: "aqua",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Home;