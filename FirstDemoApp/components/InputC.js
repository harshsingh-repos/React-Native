import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";

const TextInputExample = () => {
  const [content, setContent] = useState("");

  return (
    <View style={{ fontSize: 24, padding: 100, backgroundColor: "white" }}>
      <Text> Enter Text</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        placeholder="Enter Text Here ..."
        style={{
          height: 30,
          borderColor: "red",
          borderWidth: 1,
          padding: 20,
          marginTop: 10,
        }}
      />
      <Text> You Entered: {content} </Text>
    </View>
  );
};

export default TextInputExample;
