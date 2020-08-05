// Creating a react component - to show some content to user

// Part 1 - import libraries
import React from 'react';
import {Text, StyleSheet}  from 'react-native';

// Part 2 - create component, and assign a function to it (keyword function or arrow function)
// Can also create a component as a class
// const componentScreen = function() {};
const ComponentScreen = () => {
  return <Text style={styles.textStyle}>This is components screen.</Text>;
};

// Part 3 - Stylesheet
// Change font size of Text element
const styles = StyleSheet.create({
  // Define a group of styles
  // Grouping of different stylinlg rules to apply to 'textStyles'
  textStyle : {
    fontSize: 30
  }
});

// Part 4: export component
export default ComponentScreen;