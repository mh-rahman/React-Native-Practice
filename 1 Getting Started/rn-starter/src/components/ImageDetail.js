import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Text>
        This is {props.title}. It's score is {props.imageScore}
      </Text>
      <Image source={props.imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
