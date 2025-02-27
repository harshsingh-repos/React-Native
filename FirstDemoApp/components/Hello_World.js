import { Text, View, StyleSheet } from "react-native";

export default function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, This is first react expo example.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
});
