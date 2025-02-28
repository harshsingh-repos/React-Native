import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FetchApiDemo() {
  const [crypto, setCrypto] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.coinlore.net/api/ticker/?id=90")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No Response");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setCrypto(data[0]);
        } else {
          setError("No Data Found");
        }
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <View style={styles.container}>
      <Text> Fetching Crypto Data</Text>
      <View>
        <Text style={styles.error}> {error}</Text>
        <Text style={styles.title}>
          {crypto.name} ({crypto.symbol})
        </Text>
        <Text style={styles.price}>Price : ${crypto.price_usd} </Text>
        <Text> Rank : ${crypto.rank} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  error: { fontSize: 20, fontWeight: "bold", color: "red" },
  title: { fontSize: 30, fontWeight: "bold" },
  price: { fontSize: 20, color: "green" },
});
