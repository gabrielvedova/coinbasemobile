// filepath: /home/vedova/Documentos/coinbasemobile/CoinBase/src/TabNavigator.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Reports from "./views/Reports";
import ExpensesHistory from "./views/ExpensesHistory";
import Style from "./Style";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./views/Home";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FAFAFA",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarIconStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View style={styles.iconWrapper}>
              <Ionicons name="home" size={28} color={Style.colors.blue} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={ExpensesHistory}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View style={styles.iconWrapper}>
              <Ionicons name="calendar" size={28} color={Style.colors.blue} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View style={styles.iconWrapper}>
              <Ionicons
                name="stats-chart"
                size={28}
                color={Style.colors.blue}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
