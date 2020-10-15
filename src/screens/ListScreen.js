import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const friends = [
  { name: "Friend #1" },
  { name: "Friend #2" },
  { name: "Friend #3" },
  { name: "Friend #4" },
  { name: "Friend #5" },
  { name: "Friend #6" },
  { name: "Friend #7" },
  { name: "Friend #8" },
  { name: "Friend #9" },
  { name: "Friend #10" },
];

const ListScreen = () => {
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => (
        <Text style={style.textStyle}>{item.name}</Text>
      )}
      keyExtractor={(friend) => friend.name}
    />
  );
};

const style = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    margin: "8%",
  },
});

export default ListScreen;
