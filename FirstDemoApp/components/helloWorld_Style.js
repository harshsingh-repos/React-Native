import { View, Text, StyleSheet } from "react-native";

export default function HelloWorldStyle() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hello, World </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffcc",
  },
  text: {
    fontSize: 30,
    color: "#ff0000",
  },
});
