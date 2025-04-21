import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Relatório de gastos</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
