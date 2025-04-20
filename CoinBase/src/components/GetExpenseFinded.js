import React from "react";
import { Text, View, StyleSheet } from "react-native";
import expenses from "../data/Expenses.json";

export default ({ idSearch }) => {
  // Encontra o gasto com base no idSearch
  const expense = expenses.find((expense) => expense.id === idSearch);

  // Verifica se o gasto foi encontrado
  if (!expense) {
    return <Text style={{ marginTop: 100 }}>Gasto não encontrado</Text>;
  } else {
    return (
      <View style={styles.item}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {expense.title}
        </Text>
        <Text>R${expense.price}</Text>
        <Text>{expense.category}</Text>
        <Text>{expense.date}</Text>
      </View>
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
    width: "100%",
  },
});
