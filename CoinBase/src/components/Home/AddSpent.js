import React from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Style from "../../Style";

// cuidar depois que davi desenvolver a página de add gasto

export default (props) => {
  const navigateToAddSpent = () => {
    // Implement navigation to the Add Spent screen
    // For example, using React Navigation:
    Alert.alert("Navegar para a tela de adicionar gasto");
  };

  return (
    <TouchableOpacity onPress={navigateToAddSpent}>
      <AntDesign name="pluscircle" size={100} color={Style.colors.blue} />
    </TouchableOpacity>
  );
};
