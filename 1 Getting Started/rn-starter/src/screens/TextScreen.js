import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text } from "react-native";

const TextScreen = () => {
  const [password, setpassword] = useState("");

  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newText) => setpassword(newText)}
      />
      {password.length < 5 ? (
        <Text style={{ color: "red" }}>
          Your password must be atleast 5 character long.
        </Text>
      ) : null}
      <Text>Your password is: {password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "green",
  },
});

export default TextScreen;
