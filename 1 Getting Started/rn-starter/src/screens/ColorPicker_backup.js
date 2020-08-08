import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import ColorAdjuster from "./ColorAdjuster";
import { getOrientationAsync } from "expo/build/ScreenOrientation/ScreenOrientation";

const COLOR_ADJUST = 15;

const ColorPicker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red' or 'blue' or 'green'
    // change = +15 or -15
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorAdjuster
        color={"Red"}
        onIncrease={() => setColor("red", COLOR_ADJUST)}
        onDecrease={() => setColor("red", -1 * COLOR_ADJUST)}
      />
      <ColorAdjuster
        color={"Green"}
        onIncrease={() => setColor("green", COLOR_ADJUST)}
        onDecrease={() => setColor("green", -1 * COLOR_ADJUST)}
      />
      <ColorAdjuster
        color={"Blue"}
        onIncrease={() => setColor("blue", COLOR_ADJUST)}
        onDecrease={() => setColor("blue", -1 * COLOR_ADJUST)}
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
      <Text style={styles.textStyle}>
        Color Value: {`rgb(${red}, ${green}, ${blue})`}
      </Text>
      <Button
        title={"Reset"}
        onPress={() => {
          setRed(0);
          setBlue(0);
          setGreen(0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "blue",
  },
});

export default ColorPicker;
