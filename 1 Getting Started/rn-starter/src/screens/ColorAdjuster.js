import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

const ColorAdjuster = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text> {color} </Text>
      <Button title={`More ${color}`} onPress={() => onIncrease()} />
      <Button title={`Less ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorAdjuster;
