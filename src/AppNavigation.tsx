import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NavOptions from "./navigation/NavOptions";
import HomeScreen from "./screens/home/HomeScreen";

import LoginScreen from "./screens/login/LoginScreen";
import SettingScreen from "./screens/setting/SettingScreen";
import SecureStore from "./security/SecureStore";
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const accessToken = SecureStore.getAccessToken();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NavOptions.navigatorOptions}>
        <Stack.Screen
          options={{ headerTitle: "Login" }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            ...NavOptions.largeHeader,
            headerTitle: "Setting",
          }}
          name="SettingScreen"
          component={SettingScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
