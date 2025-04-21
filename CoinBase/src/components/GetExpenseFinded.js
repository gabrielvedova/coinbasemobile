import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import expenses from "../data/Expenses.json";
import { useNavigation } from "@react-navigation/native";

export default ({ idSearch }) => {
  const navigation = useNavigation();
  // Encontra o gasto com base no idSearch
  const expense = expenses.find((expense) => expense.id === idSearch);

  // Verifica se o gasto foi encontrado
  if (!expense) {
    return <Text style={{ marginTop: 100 }}>Gasto não encontrado</Text>;
  } else {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          // Navegação para a tela de detalhes do gasto
          navigation.navigate("ExpenseDetails", {
            expense: expense,
          });
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {expense.title}
        </Text>
        <Text>R${expense.price}</Text>
        <Text>{expense.category}</Text>
        <Text>{expense.date}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FAFAFA",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    width: "90%",
  },
});
