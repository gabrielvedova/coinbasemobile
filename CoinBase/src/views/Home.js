import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import style from "../Style";
import ButtonExpensesWeek from "../components/Home/ButtonExpensesWeek";
import AddSpent from "../components/Home/AddSpent";
import FindSpent from "../components/Home/FindSpent";
import ListRecentsExpenses from "../components/Home/ListRecentsExpenses";
import GetExpenseFinded from "../components/Home/GetExpenseFinded";

export default (props) => {
  const [isSearch, setIsSearch] = useState(false);
  const [idSearch, setIdSearch] = useState(null); // Inicializa como null

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* HEADER */}
      <View style={styles.menu}>
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 18, color: "#808080" }}>Olá,</Text>
          <Text style={styles.textmenu}>Davi Gomes</Text>
        </View>
        <View style={styles.perfil}></View>
      </View>

      {/* HOME */}
      <View style={styles.home}>
        <TouchableOpacity style={styles.expensesWeek}>
          <ButtonExpensesWeek />
        </TouchableOpacity>
        <FindSpent setIsSearch={setIsSearch} setIdSearch={setIdSearch} />
        {isSearch ? (
          <GetExpenseFinded idSearch={idSearch} />
        ) : (
          <ListRecentsExpenses />
        )}
      </View>
      <View style={styles.ButtonNewSpent}>
        <AddSpent />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    marginBottom: 40,
  },
  textmenu: {
    fontSize: 20,
  },
  home: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  perfil: {
    height: "80%",
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 50,
  },
  expensesWeek: {
    width: "90%",
    height: 150,
    justifyContent: "center",
    backgroundColor: style.colors.blue,
    borderRadius: 20,
    padding: 10,
  },
  ButtonNewSpent: {
    position: "relative",
    bottom: "5%",
    left: "60%",
    zIndex: 1,
  },
});
