import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SecureStore from "../../security/SecureStore";

const LoginScreen = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          SecureStore.setAccessToken("SSSSSSS");
        }}
      >
        <Text>LoginScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
