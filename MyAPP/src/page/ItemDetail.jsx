import React from "react";
import { View, Text } from "react-native";

const ItemDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.url}</Text>
    </View>
  );
};

export default ItemDetails;