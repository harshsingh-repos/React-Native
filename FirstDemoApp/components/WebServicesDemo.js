import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Crypto() {
  const [crypto, setCrypto] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.coinlore.net/api/ticker/?id=90")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setCrypto(data[0]);
        } else {
          setError("No Data found");
        }
      })
      .catch((error) => console.log("Error Fetching data: ", error));
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
