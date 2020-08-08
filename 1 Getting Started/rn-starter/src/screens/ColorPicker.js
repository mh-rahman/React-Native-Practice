import React, { useReducer } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import ColorAdjuster from "./ColorAdjuster";
import { getOrientationAsync } from "expo/build/ScreenOrientation/ScreenOrientation";

const COLOR_ADJUST = 15;

const reducer = (state, action) => {
  // state = our state variables. state === {red: num, green: num, blue: num}
  // action = how to update the state variable. action === {colorToChange: 'red'||'green'||'blue', amount: 15||-15 }

  switch (action.colorToChange) {
    case "red":
      // create a new state variable with updated red value
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const ColorPicker = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  // dispatch = run my reducer.

  // Destructure state to get individual color values
  const { red, green, blue } = state;

  return (
    <View>
      <ColorAdjuster
        color={"Red"}
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_ADJUST })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_ADJUST })
        }
      />
      <ColorAdjuster
        color={"Green"}
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_ADJUST })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_ADJUST })
        }
      />
      <ColorAdjuster
        color={"Blue"}
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_ADJUST })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_ADJUST })
        }
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
