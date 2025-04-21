import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { FilterProvider } from "./context/FilterContext";
import StackNavigatior from "./StackNavigatior";

export default function App() {
  return (
    <FilterProvider>
      <NavigationContainer>
        <StackNavigatior />
        {/* <TabNavigator /> */}
      </NavigationContainer>
    </FilterProvider>
  );
}
