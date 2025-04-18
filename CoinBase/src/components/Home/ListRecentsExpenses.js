import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import expenses from "../../data/Expenses.json";

export default (props) => {
  const recentsExpenses = expenses
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const renderItem = ({ item }) => (
    <View style={styles.item} key={item.id}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
      <Text>R${item.price}</Text>
      <Text>{item.category}</Text>
      <Text>{item.date}</Text>
    </View>
  );

  return (
    <>
      <Text style={styles.titleRecentsExpensives}>Gastos Recentes:</Text>
      <View style={{ width: "90%" }}>
        {recentsExpenses.map((item) => renderItem({ item }))}
      </View>
    </>
  );
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
  titleRecentsExpensives: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    marginRight: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});
