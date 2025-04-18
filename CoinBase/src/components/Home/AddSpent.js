import React, { use } from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Style from "../../Style";
import { useNavigation } from "@react-navigation/native";

// cuidar depois que davi desenvolver a página de add gasto

export default (props) => {
  const navigation = useNavigation();
  const navigateToAddSpent = () => {
    navigation.navigate("AddGasto");
  };

  return (
    <TouchableOpacity onPress={navigateToAddSpent}>
      <AntDesign name="pluscircle" size={100} color={Style.colors.blue} />
    </TouchableOpacity>
  );
};
