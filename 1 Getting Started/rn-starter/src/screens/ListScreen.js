import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  // Array of objects
  const things = [
    { name: "box1", size: 20 },
    { name: "box2", size: 21 },
    { name: "box3", size: 22 },
    { name: "box4", size: 23 },
    { name: "box5", size: 24 },
    { name: "box6", size: 25 },
    { name: "box7", size: 26 },
  ];

  return (
    <FlatList
      // Make the list horizontal
      // horizontal
      showsVerticalScrollIndicator={false}
      data={things}
      // Key prop - will be called for every item of the array
      keyExtractor={(thing) => thing.name}
      // renderItem={({thing}) => {
      // thing will have more than just the name property:
      // thing = {item:{name:'box1'}, index=0}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Name: {item.name}, Size: {item.size}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
