import React, { useReducer } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import ColorAdjuster from "./ColorAdjuster";
import { getOrientationAsync } from "expo/build/ScreenOrientation/ScreenOrientation";

const COLOR_ADJUST = 15;

const reducer = (state, action) => {
  // state = our state variables. state === {red: num, green: num, blue: num}
  // action = how to update the state variable. action === {type: 'red'||'green'||'blue', payload: 15||-15 }

  switch (action.type) {
    case "change_red":
      // create a new state variable with updated red value
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
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
          dispatch({ type: "change_red", payload: COLOR_ADJUST })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_ADJUST })
        }
      />
      <ColorAdjuster
        color={"Green"}
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_ADJUST })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_ADJUST })
        }
      />
      <ColorAdjuster
        color={"Blue"}
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_ADJUST })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_ADJUST })
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
