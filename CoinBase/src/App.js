import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import style from "./Style";
import Home from "./views/Home";
import Digitarvalor from "./views/Digitarvalor"; 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...style.style.container,
  },
});
