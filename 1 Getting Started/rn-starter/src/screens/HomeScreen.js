import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Components Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => props.navigation.navigate("Image")}
        title="Go to Image Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Color")}
        title="Go to Color Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("ColorPicker")}
        title="Go to Color picker Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Text")}
        title="Go to Text Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("BoxScreen")}
        title="Go to Box Object Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
