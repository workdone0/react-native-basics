import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const generateColor = () => {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => setColors([...colors, generateColor()])}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: generateColor(),
              }}
            />
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default ColorScreen;
