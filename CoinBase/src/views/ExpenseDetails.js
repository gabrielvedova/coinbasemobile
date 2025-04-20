import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ route }) => {
  const { expense } = route.params; // Recebe os dados do gasto via navegação

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{expense.title}</Text>
      <Text style={styles.text}>Preço: R${expense.price}</Text>
      <Text style={styles.text}>Categoria: {expense.category}</Text>
      <Text style={styles.text}>Data: {expense.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});
