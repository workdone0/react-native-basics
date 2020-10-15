import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Shubham";
  return (
    <View>
      <Text style={style.textStyle}>Getting started with React Native.</Text>
      <Text style={style.subHeaderTextStyle}>My name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderTextStyle: {
    fontSize: 25,
  },
});

export default ComponentsScreen;
