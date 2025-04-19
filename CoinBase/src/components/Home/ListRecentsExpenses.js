// filepath: /home/vedova/Documentos/coinbasemobile/CoinBase/src/components/Home/ListRecentsExpenses.js
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import expenses from "../../data/Expenses.json";

export default function ListRecentsExpenses() {
  const navigation = useNavigation();

  const recentsExpenses = expenses
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("ExpenseDetails", { expense: item })}
      key={item.id}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
      <Text>R${item.price}</Text>
      <Text>{item.category}</Text>
      <Text>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Text style={styles.titleRecentsExpensives}>Gastos Recentes:</Text>
      <View style={{ width: "100%" }}>
        {recentsExpenses.map((item) => renderItem({ item }))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FAFAFA",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    width: "100%",
  },
  titleRecentsExpensives: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    marginRight: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
