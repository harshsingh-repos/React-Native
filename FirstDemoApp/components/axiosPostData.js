import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import axios from "axios";

const PostDataReq = () => {
  const [name, setName] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const postData = () => {
    axios
      .post("https://reqres.in/api/users", {
        name: name,
        job: "Front End Developer",
      })
      .then((response) => {
        setResponseMsg(`User Created : ${response.data.name}`);
      })
      .catch((error) => {
        console.error(error);
        setResponseMsg("Error Sending the data");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Name" value={name} onChangeText={setName} />

      <Button title="Submit" onPress={postData} />

      <Text style={styles.text}>{responseMsg}</Text>
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

export default PostDataReq;
