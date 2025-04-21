import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FilterContext } from "../context/FilterContext";
import FindSpent from "../components/FindSpent";
import ListExpense from "../components/ExpenseHistory/ListExpense";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FilterOptions from "../components/ExpenseHistory/FilterOptions";
import GetExpenseFinded from "../components/GetExpenseFinded";

export default function ExpensesHistory() {
  const { useFilter, setUseFilter } = useContext(FilterContext);
  const [openFilter, setOpenFilter] = useState(false);
  const [idSearch, setIdSearch] = useState(null);
  const [isSearch, setIsSearch] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerSearch}>
        <View style={styles.containerSearchPrincipal}>
          <FindSpent setIsSearch={setIsSearch} setIdSearch={setIdSearch} />
          <TouchableOpacity onPress={() => setOpenFilter(!openFilter)}>
            <MaterialIcons
              name={openFilter ? "filter-list-off" : "filter-list"}
              size={28}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {openFilter ? (
          <FilterOptions
            useFilter={useFilter}
            setUseFilter={setUseFilter}
            setOpenFilter={setOpenFilter}
          />
        ) : null}
      </View>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: "90%",
            alignItems: "center",
          }}
        >
          {isSearch ? (
            <GetExpenseFinded idSearch={idSearch} />
          ) : (
            <ListExpense filterOption={useFilter} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerSearch: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  containerSearchPrincipal: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
});
