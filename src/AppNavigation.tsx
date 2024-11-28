import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/home/HomeScreen";
import SecureStore from "./security/SecureStore";
import LoginScreen from "./screens/login/LoginScreen";
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const accessToken = SecureStore.getAccessToken();
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
