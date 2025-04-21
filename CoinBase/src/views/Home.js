import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FilterContext } from "../context/FilterContext";
import style from "../Style";
import ButtonExpensesWeek from "../components/Home/ButtonExpensesWeek";
import AddSpent from "../components/Home/AddSpent";
import FindSpent from "../components/FindSpent";
import ListRecentsExpenses from "../components/Home/ListRecentsExpenses";
import GetExpenseFinded from "../components/GetExpenseFinded";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const { useFilter, setUseFilter } = useContext(FilterContext);
  const [isSearch, setIsSearch] = useState(false);
  const [idSearch, setIdSearch] = useState(null);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <TouchableOpacity
            style={styles.expensesWeek}
            onPress={() => {
              setUseFilter(0);
              navigation.navigate("History");
            }}
          >
            <ButtonExpensesWeek />
          </TouchableOpacity>
          <FindSpent setIsSearch={setIsSearch} setIdSearch={setIdSearch} />
          {isSearch ? (
            <GetExpenseFinded idSearch={idSearch} />
          ) : (
            <ListRecentsExpenses />
          )}
        </View>
        <StatusBar style="auto" />
      </ScrollView>
      <View style={styles.ButtonNewSpent}>
        <AddSpent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    height: 120,
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
    position: "absolute",
    bottom: 30,
    right: 20,
    zIndex: 10,
  },
});
