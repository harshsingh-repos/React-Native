import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const LayoutImageDemo = () => {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("space-around");
  const [align, setAlign] = useState("center");
  const [wrap, setWrap] = useState("wrap");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}> React LayoutDemo with Images</Text>
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
        <View style={styles.item}>
          <Image source={require("../assets/img1.png")} style={styles.image} />
          <Text style={styles.text}>Image 1</Text>
        </View>
        <View style={styles.item}>
          <Image source={require("../assets/img2.png")} style={styles.image} />
          <Text style={styles.text}>Image 2</Text>
        </View>
        <View style={styles.item}>
          <Image source={require("../assets/img3.png")} style={styles.image} />
          <Text style={styles.text}>Image 3</Text>
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setDirection(direction === "row" ? "column" : "row")}
        >
          <Text style={styles.buttonText}> Toggle flexDirection</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setJustify(justify === "center" ? "space-around" : "center")
          }
        >
          <Text style={styles.buttonText}> Toggle flexJustify</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setAlign(align === "center" ? "flex-start" : "center")}
        >
          <Text style={styles.buttonText}> Toggle flexAlign</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setWrap(wrap === "wrap" ? "nowrap" : "wrap")}
        >
          <Text style={styles.buttonText}> Toggle flexWrap</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 50,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
  },
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
  item: {
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 5,
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

export default LayoutImageDemo;
