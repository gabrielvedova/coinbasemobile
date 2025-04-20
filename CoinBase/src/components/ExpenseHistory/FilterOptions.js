import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default ({ setOpenFilter, setUseFilter, useFilter }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerOption}
        onPress={() => {
          setOpenFilter(false);
          setUseFilter(1);
        }}
      >
        <Ionicons
          name={useFilter === 1 ? "radio-button-on" : "radio-button-off"}
          size={24}
          color="black"
        />
        <Text>Hoje</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerOption}
        onPress={() => {
          setOpenFilter(false);
          setUseFilter(2);
        }}
      >
        <Ionicons
          name={useFilter === 2 ? "radio-button-on" : "radio-button-off"}
          size={24}
          color="black"
        />
        <Text>Ontem</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerOption}
        onPress={() => {
          setOpenFilter(false);
          setUseFilter(3);
        }}
      >
        <Ionicons
          name={useFilter === 3 ? "radio-button-on" : "radio-button-off"}
          size={24}
          color="black"
        />
        <Text>Semana</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerOption}
        onPress={() => {
          setOpenFilter(false);
          setUseFilter(4);
        }}
      >
        <Ionicons
          name={useFilter === 4 ? "radio-button-on" : "radio-button-off"}
          size={24}
          color="black"
        />
        <Text>Mês</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  containerOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
