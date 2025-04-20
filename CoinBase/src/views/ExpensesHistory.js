import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import FindSpent from "../components/FindSpent";
import ListExpense from "../components/ExpenseHistory/ListExpense";
import Ionicons from "@expo/vector-icons/Ionicons";

export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containarSearch}>
        <FindSpent />
        <Ionicons name="filter" size={24} color="black" />
      </View>
      <ScrollView style={{ width: "90%" }} showsVerticalScrollIndicator={false}>
        <ListExpense />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containarSearch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
