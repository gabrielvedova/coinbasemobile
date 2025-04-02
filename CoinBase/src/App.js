import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import style from "./Style";
import Home from "./components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: style.container,
  title: style.title,
});
