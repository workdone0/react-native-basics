import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <View>
      <Button onPress={increment} title="Increase" />
      <Button onPress={decrement} title="Decrease" />
      <Text>Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;
