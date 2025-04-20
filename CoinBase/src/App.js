import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigatior from "./StackNavigatior";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./Navigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
