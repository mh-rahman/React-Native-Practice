import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text } from "react-native";

const BoxScreen = () => {
  const [password, setpassword] = useState("");

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box 1</Text>
      <Text style={styles.textStyle}>Box 2</Text>
      <Text style={styles.textStyle}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "green",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
});

export default BoxScreen;
