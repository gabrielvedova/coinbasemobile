import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./views/Home";
import AddGasto from "./views/AddGasto";
import ExpenseDetails from "./views/ExpenseDetails";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddGasto"
          component={AddGasto}
          options={{ title: "Novo Gasto" }}
        />
        <Stack.Screen name="ExpenseDetails" component={ExpenseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
