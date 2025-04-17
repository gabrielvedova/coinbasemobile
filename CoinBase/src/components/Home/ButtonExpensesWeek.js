import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import style from "../../Style";

export default (props) => {
  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  expensesWeekDiv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
