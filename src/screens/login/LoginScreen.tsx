import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Text } from "react-native";
import TextController from "../../components/input/TextController";
import VStack from "../../components/views/VStack";
import useSelectTheme from "../../hook/useSelectTheme";

const LoginScreen = () => {
  const { onSelectAdaptiveTheme } = useSelectTheme();
  const { control } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  useEffect(() => {
    // Side effect
    onSelectAdaptiveTheme();
  }, []);
  return (
    <VStack flex>
      <VStack flex={0.5} bgColor="#02CFC0">
        <Text>Logo</Text>
        <TextController control={control} value="" name="email" />
      </VStack>
      <VStack flex={0.5}>
        <Text>Form</Text>
        <Text>Forgot password?</Text>
      </VStack>
      <Text>Login</Text>
    </VStack>
  );
};

export default LoginScreen;
