import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import axios from "axios";

const PostData = () => {
  const [title, setTitle] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const sendData = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: "This is a test post",
        userId: 1,
      })
      .then((response) => {
        setResponseMessage(`Post Created: ID ${response.data.id}`);
      })
      .catch((error) => {
        console.error(error);
        setResponseMessage("Error sending the post");
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Title"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Submit" onPress={sendData} />
      <Text style={styles.text}>{responseMessage}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
});
export default PostData;
