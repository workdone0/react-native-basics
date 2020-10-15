import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to Components"
        onPress={() => props.navigation.navigate("Component")}
      />
      <Button
        title="Go to Lists"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        title="Go to Counter"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => props.navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
