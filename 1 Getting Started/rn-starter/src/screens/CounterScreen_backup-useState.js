import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = (props) => {
  // let counter = 0; // not the correct way to initialize state.
  // using let doesnt inform react that variable has changed hence its value doesnt change on screen

  // Correct way - react will keep watching this variable and will update the screen when variable changes
  const [counter, setCounter] = useState(0);
  // [] - is array destructuring, a mwthod to reference or pull elements of an array

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // counter++; // this is not compatible with useState syntax. We never modify state variable directly
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // counter--;
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
