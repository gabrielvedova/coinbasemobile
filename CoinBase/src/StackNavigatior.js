import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import AddGasto from "./views/AddGasto";
import ExpenseDetails from "./views/ExpenseDetails";
import ExpensesHistory from "./views/ExpensesHistory";
import ListExpense from "./components/ExpenseHistory/ListExpense";

const Stack = createNativeStackNavigator();

export default (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddGasto"
        component={AddGasto}
        options={{ title: "Novo Gasto" }}
      />
      <Stack.Screen
        name="ExpensesHistory"
        component={ExpensesHistory}
        options={{ title: "Histórico de Gastos" }}
      />
      <Stack.Screen
        name="ListExpense"
        component={ListExpense}
        options={{ title: "Lista de Gastos" }}
      />
      <Stack.Screen
        name="ExpenseDetails"
        component={ExpenseDetails}
        options={{ title: "Detalhes do Gasto" }}
      />
    </Stack.Navigator>
  );
};
