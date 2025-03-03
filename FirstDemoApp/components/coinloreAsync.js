import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CryptoAPIAsync() {
  const [crypto, setCrypto] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function callUsingAsync() {
    try {
      const reposnse = await fetch(
        "https://api.coinlore.net/api/ticker/?id=80"
      );
      const data = await reposnse.json();
      setCrypto(data[0]);

      //   if (data && data.length > 0) {
      //     setCrypto(data[0]);
      //   } else {
      //     setError("No data found");
      //   }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    callUsingAsync();
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
