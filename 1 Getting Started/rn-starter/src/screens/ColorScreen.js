import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Get Color"
        onPress={() => {
          let newColor = randomRGB();
          setColors([...colors, newColor]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        // Destructuring is need for render item but not for keyExtractor
        renderItem={({ item }) => {
          // item = 'rgb(1,2,3)'
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
