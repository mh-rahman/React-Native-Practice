import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const INCREMENT_STEP = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_count":
      return { ...state, count: state.count + INCREMENT_STEP };
    case "decrease_count":
      return { ...state, count: state.count - INCREMENT_STEP };
    case "reset_count":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const CounterScreen = (props) => {
  // creating initial state and dispatch
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase_count", payload: INCREMENT_STEP });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease_count", payload: INCREMENT_STEP });
        }}
      />
      <Text>Current Count: {count}</Text>
      <Button
        title="Reset"
        onPress={() => {
          dispatch({ type: "reset_count", payload: INCREMENT_STEP });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
