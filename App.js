// App.js
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelecamereScreen from "./components/TelecamereScreen";
import ValvoleScreen from "./components/ValvoleScreen"


export default function App() {
    const Tab = createBottomTabNavigator();
    return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Telecamere" component={TelecamereScreen} />
        <Tab.Screen name="Valvole" component={ValvoleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}