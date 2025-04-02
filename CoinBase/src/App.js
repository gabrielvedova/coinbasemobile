import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import style from "./Style";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: style.container,
  title: style.title,
});
