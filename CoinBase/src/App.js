import { StatusBar } from "expo-status-bar";

import StackNavigatior from "./StackNavigatior";
import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
