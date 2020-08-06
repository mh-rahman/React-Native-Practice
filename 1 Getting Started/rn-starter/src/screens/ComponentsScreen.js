// Creating a react component - to show some content to user

// Part 1 - import libraries
import React from "react";
import { Text, StyleSheet, View } from "react-native";

// Part 2 - create component, and assign a function to it (keyword function or arrow function)
// Can also create a component as a class
// const componentScreen = function() {};
const ComponentScreen = () => {
  const greeting = <Text>Hello there!</Text>;
  const name = "Haseeb";
  return (
    <View>
      <Text style={styles.textStyle1}>Getting started with react native!.</Text>
      <Text style={styles.textStyle2}>My name is {name}.</Text>
    </View>
  );
};

// Part 3 - Stylesheet
// Change font size of Text element
const styles = StyleSheet.create({
  // Define a group of styles
  // Grouping of different stylinlg rules to apply to 'textStyles'
  textStyle1: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 20,
  },
});

// Part 4: export component
export default ComponentScreen;
