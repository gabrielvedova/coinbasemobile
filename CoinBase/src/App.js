import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import style from "./Style";
import Home from "./views/Home";
import AddGasto from "./views/AddGasto";
import Navigation from "./Navigation";

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    ...style.style.container,
  },
});
