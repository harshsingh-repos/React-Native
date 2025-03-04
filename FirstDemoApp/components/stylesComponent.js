import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FlexDemo = () => {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("space-evenly");
  const [align, setAlign] = useState("stretch");
  const [wrap, setWrap] = useState("nowrap");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flexbox Demo</Text>

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
        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "orange" }]}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "green" }]}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "blue" }]}>
          <Text style={styles.boxText}>Box 4</Text>
        </View>
      </View>

      {/* Control Buttons */}
      <View style={styles.controls}>
        <TouchableOpacity
          onPress={() => setDirection(direction === "row" ? "column" : "row")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Toggle flexDirection</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            setJustify(justify === "center" ? "space-evenly" : "center")
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Toggle justifyContent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setAlign(align === "center" ? "stretch" : "center")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Toggle alignItems</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setWrap(wrap === "wrap" ? "nowrap" : "wrap")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Toggle flexWrap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 50, backgroundColor: "white" },
  flexContainer: {
    flex: 1,
    backgroundColor: "grey",
    padding: 10,
    marginBottom: 20,
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  box: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  boxText: { color: "black", fontSize: 18, fontWeight: "bold" },
  button: { backgroundColor: "blue", padding: 10, margin: 5, borderRadius: 5 },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  controls: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default FlexDemo;
