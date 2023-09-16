import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Text style={style.Text}>NAME: {item.name}</Text>
      <Text style={style.Text}>URL: {item.url}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Text: {
    textTransform: 'uppercase',
    marginLeft: 10,
    fontWeight: 'bold',
    

  }
})

export default ItemDetails;