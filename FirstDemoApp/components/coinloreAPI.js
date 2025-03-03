import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CryptoAPI() {
  const [crypto, setCrypto] = useState("");

  useEffect(() => {
    fetch("https://api.coinlore.net/api/ticker/?id=10")
      .then((response) => response.json())
      .then((data) => setCrypto(data[0]))
      .catch((error) => console.error("Error fetchiing data:", error));
  }, []);

  return (
    <View style={styles.container}>
      <Text> Fetching Crypto Data</Text>
      <Text style={styles.name}> Name: {crypto.name}</Text>
      <Text style={styles.rank}> Rank: {crypto.rank}</Text>
      <Text style={styles.symbol}> Symbol: {crypto.symbol}</Text>
      <Text style={styles.price_usd}> Price: {crypto.price_usd}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 50,
  },
  name: { fontSize: 24, fontWeight: "bold", color: "red" },
  rank: { fontSize: 24, fontWeight: "bold", color: "green" },
  symbol: { fontSize: 24, fontWeight: "bold", color: "orange" },
  price_usd: { fontSize: 24, fontWeight: "bold", color: "green" },
});
