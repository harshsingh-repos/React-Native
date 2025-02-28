import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";

function MovieData() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // use an async function so that we can use await instead of chaining
  // promises
  const getMovies = async () => {
    try {
      // await the response
      const response = await fetch("https://reactnative.dev/movies.json");

      // convert the response to JSON
      const json = await response.json();

      // set the data
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 50, backgroundColor: "white" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
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

export default MovieData;
