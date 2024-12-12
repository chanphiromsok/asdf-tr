import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NavOptions from "./navigation/NavOptions";
import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import SecureStore from "./security/SecureStore";
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const accessToken = SecureStore.getAccessToken();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NavOptions.navigatorOptions}>
        {!accessToken ? (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        ) : (
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
