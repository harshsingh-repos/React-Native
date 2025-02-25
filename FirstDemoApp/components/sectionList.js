import React from "react";
import { SectionList, Text, View, StyleSheet } from "react-native";

export default function SectionListExample() {
  const data = [
    {
      title: "Fruits",
      data: ["Apples", "Oranges", "Grapes", "Mango"],
    },
    {
      title: "Vegetables",
      data: ["Carrots", "Broccoli", "Tomato", "Potato"],
    },
  ];

  return (
    <SectionList
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.header}>
          <Text style={styles.headerText}>{section.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "White",
  },
});
