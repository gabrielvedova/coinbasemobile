import React from "react";
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import AddGasto from "../components/AddGasto";
import style from "../Style";

export default (props) => {
  return (
    <SafeAreaView>
      {/* MENU */}
      <View style={styles.menu}>
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 18, color: "#808080" }}>Olá,</Text>
          <Text style={styles.textmenu}>Davi Gomes</Text>
        </View>
        <View style={styles.perfil}></View>
      </View>

      {/* HOME */}
      <View style={styles.home}>
        <View style={styles.expensesWeek}>
          <View
            style={{
              ...styles.expensesWeekDiv,
              paddingBottom: 15,
              borderBottomWidth: 1,
              borderBottomColor: style.colors.white,
            }}
          >
            <Text style={{ fontSize: 18, color: style.colors.white }}>
              Gastos da semana
            </Text>
            <AntDesign name="right" color="#f0f0f0" size={32} />
          </View>
          <View
            style={{
              ...styles.expensesWeekDiv,
              marginTop: 10,
            }}
          >
            <Text style={{ color: style.colors.white }}>15 de fevereiro</Text>
            <Text style={{ color: style.colors.white }}>R$300,00</Text>
          </View>
        </View>
        <AddGasto />
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
    backgroundColor: style.colors.blue,
    borderRadius: 20,
    padding: 10,
  },
  expensesWeekDiv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
