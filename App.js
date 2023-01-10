// App.js
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";



export default function App() {
    const Tab = createBottomTabNavigator();
    return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Telecamere" component={HomeScreen} />
        <Tab.Screen name="Valvole" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}