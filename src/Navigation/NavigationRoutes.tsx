import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen from "../Screens";

const Stack = createNativeStackNavigator();

import BottomTabs from "./BottomTabs";
import { MainOption, SettingOption, ProfileOption } from "./navigationOption";

const NavigationRoutes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="BottomTabs"
        component={BottomTabs}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Screen.Login}
      />
      <Stack.Screen
        options={ProfileOption}
        name="Profile"
        component={Screen.Profile}
      />
      <Stack.Screen
        options={SettingOption}
        name="Setting"
        component={Screen.Setting}
      />
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="Register"
        component={Screen.Register}
      />
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="EditProfile"
        component={Screen.EditProfile}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default NavigationRoutes;
