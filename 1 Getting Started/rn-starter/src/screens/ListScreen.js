import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  // Array of objects
  const things = [
    { name: "box1" },
    { name: "box2" },
    { name: "box3" },
    { name: "box4" },
  ];

  return (
    <FlatList
      data={things}
      // renderItem={({thing}) => {
      // thing will have more than just the name property:
      // thing = {item:{name:'box1'}, index=0}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
