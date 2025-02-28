import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AysncCrypto() {
  const [crypto, setCrypto] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        "https://api.coinlore.net/api/ticker/?id=90"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // convert the response to JSON
      const data = await response.json();
      if (data && data.length > 0) {
        setCrypto(data[0]);
      } else {
        setError("No Data found");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCryptoData();
  }, []);

  return (
    <View style={styles.container}>
      <Text> Fetching Data..</Text>
      <View>
        <Text style={styles.title}> Name: {crypto.name}</Text>
        <Text style={styles.symbol}> Symbol: {crypto.symbol}</Text>
        <Text style={styles.price}> Price: {crypto.price_usd}</Text>
        <Text> Rank: {crypto.rank} </Text>
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
  title: { fontSize: 30, color: "red" },
  symbol: { fontSize: 30, color: "black" },
  price: { fontSize: 30, color: "green" },
});
