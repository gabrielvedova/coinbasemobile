import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import expenses from "../../data/Expenses.json";

export default (props) => {
  const recentsExpenses = expenses
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>R${item.price}</Text>
      <Text>{item.category}</Text>
      <Text>{item.date}</Text>
    </View>
  );

  return (
    <FlatList
      data={recentsExpenses}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={{ width: "100%" }}
    />
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
});
