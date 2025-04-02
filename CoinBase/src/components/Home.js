import React from "react";
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from "react-native";

export default (props) => {
  return (
    <SafeAreaView>
      <View style={styles.menu}>
        <Text style={styles.textmenu}>Menu</Text>
      </View>
      <View style={styles.home}>
        <Text>Home</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textmenu: {
    fontSize: 20,
    color: "#fff",
  },
  home: {
    flex: 6,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
