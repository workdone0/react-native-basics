import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
      <Text style={styles.textStyle}>Box Screen</Text>
      <Text style={styles.textStyle}>Box Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
    textAlign: "center",
    margin: 10,
  },
});

export default BoxScreen;
