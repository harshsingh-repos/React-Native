import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const FlexLayout = () => {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("center");
  const [align, setAlign] = useState("center");
  const [wrap, setWrap] = useState("nowrap");

  return (
    <View style={styles.container}>
      <Text style={styles.title}> FlexBox Layout Demo</Text>
      <View
        style={[
          styles.flexContainer,
          {
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap,
          },
        ]}
      >
        {[...Array(6)].map((_, index) => (
          <View
            key={index}
            style={[styles.box, { backgroundColor: boxColors[index] }]}
          >
            <Text style={styles.boxText}> Box: {index + 1}</Text>
          </View>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setDirection(direction === "row" ? "column" : "row")}
        >
          <Text style={styles.buttonText}> Toggle flexDirection</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setJustify(justify === "center" ? "space-between" : "center")
          }
        >
          <Text style={styles.buttonText}> Toggle flexJustify</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setAlign(align === "center" ? "stretch" : "center")}
        >
          <Text style={styles.buttonText}> Toggle flexAlign</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setWrap(wrap === "wrap" ? "nowrap" : "wrap")}
        >
          <Text style={styles.buttonText}> Toggle flexWrap</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const boxColors = [
  "rgba(51, 87, 255, 1)",
  "red",
  "orange",
  "yellow",
  "green",
  "purple",
];
const styles = StyleSheet.create({
  container: { flex: 1, padding: 50, backgroundColor: "#f4f4f4" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  flexContainer: {
    flex: 1,
    backgroundColor: "#ddd",
    padding: 10,
    marginBottom: 5,
  },
  box: {
    width: 80,
    heigth: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#5ace26",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  controls: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: 20,
  },
});

export default FlexLayout;
