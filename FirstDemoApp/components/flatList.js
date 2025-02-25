import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

export default function FlatListExample() {
  const data = [
    { id: "1", name: "Apple" },
    { id: "2", name: "Orange" },
    { id: "3", name: "Grapes" },
    { id: "4", name: "Tomatoes" },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#f9c2ff",
    borderBlockColor: "#000",
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
