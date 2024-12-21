import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import TextController from "../../components/input/TextController";
import VStack from "../../components/views/VStack";
import useSelectTheme from "../../hook/useSelectTheme";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

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
      <TextController control={control} value="" name="email" />
      <TextController control={control} value="" name="password" />
      <TouchableOpacity style={styles.loginButtonEnable}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </VStack>
  );
};

export default LoginScreen;
