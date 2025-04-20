import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import expenses from "../data/Expenses.json";

export default ({ setIsSearch, setIdSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.search}>
      <AntDesign name="search1" size={24} color="#8696BB" />
      <TextInput
        style={{
          width: "90%",
          height: 40,
          paddingLeft: 10,
        }}
        placeholder="Pesquisar"
        placeholderTextColor="#808080"
        onChangeText={(text) => {
          setSearch(text);
          const filteredExpenses = expenses.filter((expense) =>
            expense.title.toLowerCase().includes(text.toLowerCase())
          );
          setIsSearch(text.length > 0); // Define se está pesquisando
          setIdSearch(
            filteredExpenses.length > 0 ? filteredExpenses[0].id : null
          ); // Define o ID do gasto encontrado
        }}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    height: 50,
    width: "90%",
    backgroundColor: "#FAFAFA",
    borderColor: "gray",
    paddingLeft: 10,
    borderRadius: 25,
  },
});
